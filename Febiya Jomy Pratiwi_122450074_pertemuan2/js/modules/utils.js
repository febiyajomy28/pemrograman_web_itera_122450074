import { CourseSchedule } from "./data.js";

export const generateId = () => {
  let timestamp = Date.now().toString(36); 
  let randomPart = Math.random().toString(36).substr(2);
  return timestamp + randomPart;
};

export const loadSchedules = () => {
  const saved = localStorage.getItem("courseSchedules");
  if (saved) {
    const data = JSON.parse(saved);
    return data.map(
      (item) =>
        new CourseSchedule(
          item.id,
          item.name,
          item.day,
          item.startTime,
          item.endTime,
          item.lecturer,
          item.room,
          item.notes
        )
    );
  }
  return [];
};

export const saveSchedules = (schedules) => {
  localStorage.setItem("courseSchedules", JSON.stringify(schedules));
};

export const showReminder = (schedule) => {
  return new Promise((resolve) => {
    const notification = document.getElementById("reminder-notification");
    notification.innerHTML = `
            <strong>Kelas akan dimulai sebentar lagi!</strong><br>
            ${schedule.name} pukul ${schedule.startTime} di ${schedule.room}
        `;
    notification.style.display = "block";

    setTimeout(() => {
      notification.style.display = "none";
      resolve();
    }, 10000); // Hilang setelah 10 detik
  });
};