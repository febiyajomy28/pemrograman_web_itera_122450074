import { CourseSchedule } from "./modules/data.js";
import {
  generateId,
  loadSchedules,
  saveSchedules,
  showReminder,
} from "./modules/utils.js";

// Kelas untuk mengelola semua jadwal kuliah
export class ScheduleManager {
  constructor() {
    this.schedules = loadSchedules();
    this.initEventListeners();
    this.renderAll();
    this.checkReminders();
    setInterval(() => this.checkReminders(), 60000); // Cek setiap menit
  }

  // Tambah jadwal baru
  addSchedule(schedule) {
    this.schedules.push(schedule);
    saveSchedules(this.schedules);
    this.renderAll();
  }

  // Update jadwal yang ada
  updateSchedule(id, updatedSchedule) {
    const index = this.schedules.findIndex((s) => s.id === id);
    if (index !== -1) {
      this.schedules[index] = updatedSchedule;
      saveSchedules(this.schedules);
      this.renderAll();
    }
  }

  // Hapus jadwal
  deleteSchedule(id) {
    this.schedules = this.schedules.filter((s) => s.id !== id);
    saveSchedules(this.schedules);
    this.renderAll();
  }

  // Dapatkan jadwal berdasarkan ID
  getScheduleById(id) {
    return this.schedules.find((s) => s.id === id);
  }

  // Dapatkan jadwal untuk hari tertentu
  getSchedulesForDay(day) {
    return this.schedules.filter((s) => s.day === day);
  }

  // Dapatkan jadwal untuk hari ini
  getTodaySchedules() {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    return this.schedules.filter((s) => s.day === today);
  }

  // Dapatkan daftar semua mata kuliah unik untuk filter
  getUniqueCourseNames() {
    const names = [...new Set(this.schedules.map((s) => s.name))];
    return names.sort();
  }

  // Inisialisasi event listeners
  initEventListeners() {
    // Tab navigation
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document
          .querySelectorAll(".tab")
          .forEach((t) => t.classList.remove("active"));
        document
          .querySelectorAll(".tab-content")
          .forEach((c) => c.classList.remove("active"));

        tab.classList.add("active");
        const tabId = tab.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });

    // Modal close buttons
    document.querySelectorAll(".close").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById("class-modal").style.display = "none";
        document.getElementById("edit-modal").style.display = "none";
      });
    });

    // Add schedule button
    document.getElementById("add-schedule").addEventListener("click", () => {
      this.showEditModal();
    });

    // Form submission
    document.getElementById("schedule-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Delete button
    document.getElementById("delete-btn").addEventListener("click", () => {
      const id = document.getElementById("edit-id").value;
      if (id && confirm("Apakah Anda yakin ingin menghapus jadwal ini?")) {
        this.deleteSchedule(id);
        document.getElementById("edit-modal").style.display = "none";
      }
    });

    // Course filter
    document.getElementById("course-filter").addEventListener("change", (e) => {
      this.renderWeeklyCalendar(e.target.value);
    });

    // Close modals when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === document.getElementById("class-modal")) {
        document.getElementById("class-modal").style.display = "none";
      }
      if (e.target === document.getElementById("edit-modal")) {
        document.getElementById("edit-modal").style.display = "none";
      }
    });
  }

  // Handle form submission
  handleFormSubmit() {
    const id = document.getElementById("edit-id").value;
    const name = document.getElementById("course-name").value;
    const day = document.getElementById("course-day").value;
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;
    const lecturer = document.getElementById("lecturer").value;
    const room = document.getElementById("room").value;
    const notes = document.getElementById("notes").value;

    const newSchedule = new CourseSchedule(
      id || generateId(),
      name,
      day,
      startTime,
      endTime,
      lecturer,
      room,
      notes
    );

    if (id) {
      this.updateSchedule(id, newSchedule);
    } else {
      this.addSchedule(newSchedule);
    }

    document.getElementById("edit-modal").style.display = "none";
  }

  // Tampilkan modal detail kelas
  showClassDetail(id) {
    const schedule = this.getScheduleById(id);
    if (!schedule) return;

    document.getElementById("modal-title").textContent = schedule.name;
    document.getElementById("class-detail").innerHTML = `
            <p><strong>Waktu:</strong> ${
              schedule.day
            }, ${schedule.getFormattedTime()}</p>
            <p><strong>Ruangan:</strong> ${schedule.room}</p>
            <p><strong>Dosen:</strong> ${schedule.lecturer}</p>
            ${
              schedule.notes
                ? `<p><strong>Catatan:</strong> ${schedule.notes}</p>`
                : ""
            }
        `;

    document.getElementById("class-modal").style.display = "block";
  }

  // Tampilkan modal edit
  showEditModal(id = null) {
    const form = document.getElementById("schedule-form");
    form.reset();

    if (id) {
      const schedule = this.getScheduleById(id);
      if (schedule) {
        document.getElementById("edit-id").value = schedule.id;
        document.getElementById("course-name").value = schedule.name;
        document.getElementById("course-day").value = schedule.day;
        document.getElementById("start-time").value = schedule.startTime;
        document.getElementById("end-time").value = schedule.endTime;
        document.getElementById("lecturer").value = schedule.lecturer;
        document.getElementById("room").value = schedule.room;
        document.getElementById("notes").value = schedule.notes;
        document.getElementById("delete-btn").style.display = "inline-block";
      }
    } else {
      document.getElementById("edit-id").value = "";
      document.getElementById("delete-btn").style.display = "none";
    }

    document.getElementById("edit-modal").style.display = "block";
  }

  // Render semua tampilan
  renderAll() {
    this.renderTodayView();
    this.renderWeeklyCalendar();
    this.renderScheduleList();
    this.updateCourseFilter();
  }

  // Render tampilan hari ini
  renderTodayView = () => {
    const todaySchedules = this.getTodaySchedules();
    const container = document.getElementById("today-schedule");

    if (todaySchedules.length === 0) {
      container.innerHTML = "<p>Tidak ada jadwal kuliah hari ini.</p>";
      return;
    }

    container.innerHTML = todaySchedules
      .map((schedule) => {
        const isActive = schedule.isCurrentlyActive();
        return `
                <div class="today-class ${isActive ? "current-class" : ""}">
                    <h3>${schedule.name}</h3>
                    <p><strong>Waktu:</strong> ${schedule.getFormattedTime()}</p>
                    <p><strong>Dosen:</strong> ${schedule.lecturer}</p>
                    <p><strong>Ruangan:</strong> ${schedule.room}</p>
                    ${
                      isActive
                        ? '<p class="current-label">🟢 Sedang Berlangsung</p>'
                        : ""
                    }
                </div>
            `;
      })
      .join("");

    // Tambahkan event listener untuk setiap kelas
    document
      .querySelectorAll("#today-schedule .today-class")
      .forEach((el, index) => {
        el.addEventListener("click", () => {
          this.showClassDetail(todaySchedules[index].id);
        });
      });
  };

  // Render kalender mingguan
  renderWeeklyCalendar = (filter = "") => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const dayNames = [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu",
    ];
    const calendar = document.getElementById("weekly-calendar");

    calendar.innerHTML = "";

    days.forEach((day, index) => {
      let daySchedules = this.getSchedulesForDay(day);

      if (filter) {
        daySchedules = daySchedules.filter((s) => s.name === filter);
      }

      // Urutkan berdasarkan jam
      daySchedules.sort(
        (a, b) => a.parseTime(a.startTime) - b.parseTime(b.startTime)
      );

      const dayCard = document.createElement("div");
      dayCard.className = "day-card";

      const dayHeader = document.createElement("div");
      dayHeader.className = "day-header";
      dayHeader.textContent = dayNames[index];
      dayCard.appendChild(dayHeader);

      const dayContent = document.createElement("div");
      dayContent.className = "day-content";

      if (daySchedules.length > 0) {
        daySchedules.forEach((schedule) => {
          const classItem = document.createElement("div");
          classItem.className = "class-item";
          if (schedule.isCurrentlyActive()) {
            classItem.classList.add("current-class");
          }

          classItem.innerHTML = `
          <div class="class-time">${schedule.startTime} - ${
            schedule.endTime
          }</div>
          <div class="class-name">${schedule.name}</div>
          <div class="class-room">${schedule.room}</div>
          ${
            schedule.isCurrentlyActive()
              ? '<div class="current-badge">Sedang Berlangsung</div>'
              : ""
          }
        `;

          classItem.addEventListener("click", () => {
            this.showClassDetail(schedule.id);
          });

          dayContent.appendChild(classItem);
        });
      } else {
        dayContent.innerHTML = '<div class="empty-day">Tidak ada jadwal</div>';
      }

      dayCard.appendChild(dayContent);
      calendar.appendChild(dayCard);
    });
  };





  // Render daftar jadwal untuk manajemen
  renderScheduleList = () => {
    const container = document.getElementById("schedule-list");

    if (this.schedules.length === 0) {
      container.innerHTML =
        "<p>Belum ada jadwal kuliah. Tambahkan jadwal baru dengan tombol di atas.</p>";
      return;
    }

    // Kelompokkan jadwal berdasarkan hari
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const dayNames = [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu",
    ];

    container.innerHTML = days
      .map((day) => {
        const daySchedules = this.schedules
          .filter((s) => s.day === day)
          .sort((a, b) => a.parseTime(a.startTime) - b.parseTime(b.startTime));

        if (daySchedules.length === 0) return "";

        return `
                <h3>${dayNames[days.indexOf(day)]}</h3>
                <ul>
                    ${daySchedules
                      .map(
                        (schedule) => `
                        <li>
                            <strong>${
                              schedule.name
                            }</strong> (${schedule.getFormattedTime()}, ${
                          schedule.room
                        })
                            <button class="edit-btn" data-id="${
                              schedule.id
                            }">Edit</button>
                            <button class="delete-btn" data-id="${
                              schedule.id
                            }">Hapus</button>
                        </li>
                    `
                      )
                      .join("")}
                </ul>
            `;
      })
      .join("");

    // Tambahkan event listener untuk tombol edit dan hapus
    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.showEditModal(e.target.getAttribute("data-id"));
      });
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        if (confirm("Apakah Anda yakin ingin menghapus jadwal ini?")) {
          this.deleteSchedule(id);
        }
      });
    });
  };

  // Update dropdown filter mata kuliah
  updateCourseFilter = () => {
    const filter = document.getElementById("course-filter");
    const courses = this.getUniqueCourseNames();

    // Simpan nilai yang dipilih sebelumnya
    const selectedValue = filter.value;

    // Update options
    filter.innerHTML = `
            <option value="">Semua Mata Kuliah</option>
            ${courses
              .map((course) => `<option value="${course}">${course}</option>`)
              .join("")}
        `;

    // Kembalikan nilai yang dipilih sebelumnya jika masih ada
    if (courses.includes(selectedValue)) {
      filter.value = selectedValue;
    }
  };

  checkReminders = () => {
     let now = new Date();
     let today = now.toLocaleDateString("en-US", { weekday: "long" });

  this.schedules.forEach((schedule) => {
    if (schedule.day === today && schedule.isAboutToStart()) {
      let reminderShown = localStorage.getItem(`reminder-${schedule.id}`);
      if (!reminderShown) {
        showReminder(schedule).then(() => {
          localStorage.setItem(`reminder-${schedule.id}`, "true");

          let startTime = schedule.parseTime(schedule.startTime);
          let currentTime = now.getHours() * 60 + now.getMinutes();
          let delay = (startTime - currentTime) * 60000 + 60000;

          setTimeout(() => {
            localStorage.removeItem(`reminder-${schedule.id}`);
          }, delay);
        });
      }
    }
  });
}}