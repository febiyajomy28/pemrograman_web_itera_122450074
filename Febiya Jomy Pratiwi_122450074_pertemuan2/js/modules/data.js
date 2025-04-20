// Kelas untuk mewakili jadwal kuliah
export class CourseSchedule {
  constructor(id, name, day, startTime, endTime, lecturer, room, notes = "") {
    this.id = id;
    this.name = name;
    this.day = day;
    this.startTime = startTime;
    this.endTime = endTime;
    this.lecturer = lecturer;
    this.room = room;
    this.notes = notes;
  }

  isCurrentlyActive() {
    let now = new Date(); // Gunakan let
    let today = now.toLocaleDateString("en-US", { weekday: "long" }); // Gunakan let

    if (today !== this.day) return false;

    let currentTime = now.getHours() * 60 + now.getMinutes(); // Gunakan let
    let start = this.parseTime(this.startTime); // Gunakan let
    let end = this.parseTime(this.endTime); // Gunakan let

    return currentTime >= start && currentTime <= end;
  }
  
  // Method untuk mengecek apakah kelas akan dimulai dalam 10 menit
  isAboutToStart() {
    const now = new Date();
    const today = now.toLocaleDateString("en-US", { weekday: "long" });

    if (today !== this.day) return false;

    const currentTime = now.getHours() * 60 + now.getMinutes();
    const start = this.parseTime(this.startTime);

    return start - currentTime <= 10 && start - currentTime > 0;
  }

  // Helper method untuk parse waktu
  parseTime(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }

  // Method untuk format waktu tampilan
  getFormattedTime() {
    return `${this.startTime} - ${this.endTime}`;
  }
}
