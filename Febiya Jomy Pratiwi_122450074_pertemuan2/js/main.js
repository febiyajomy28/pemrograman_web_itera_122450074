import { ScheduleManager } from "./app.js";
import { CourseSchedule } from "./modules/data.js";
import { generateId } from "./modules/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  let scheduleManager = new ScheduleManager(); // Gunakan let

  if (localStorage.getItem("courseSchedules") === null) {
    let now = new Date(); // Gunakan let
    let today = now.toLocaleDateString("en-US", { weekday: "long" }); // Gunakan let
    let nextHour = (now.getHours() + 1) % 24; // Gunakan let
    let nextHourStr = nextHour.toString().padStart(2, "0") + ":00"; // Gunakan let
    let nextHourEndStr = (nextHour + 1).toString().padStart(2, "0") + ":30"; // Gunakan let

    let exampleSchedules = [
      // Gunakan let
      new CourseSchedule(
        generateId(),
        "Pemrograman Web",
        today,
        nextHourStr,
        nextHourEndStr,
        "Dr. Ahmad",
        "Ruang 301",
        "Materi: JavaScript Lanjutan"
      ),
      new CourseSchedule(
        generateId(),
        "Basis Data",
        "Wednesday",
        "10:00",
        "12:00",
        "Prof. Budi",
        "Ruang 205",
        "Kuis minggu ini"
      ),
      new CourseSchedule(
        generateId(),
        "Kecerdasan Buatan",
        "Friday",
        "13:00",
        "15:00",
        "Dr. Citra",
        "Ruang 412"
      ),
    ];

    exampleSchedules.forEach((schedule) => {
      scheduleManager.addSchedule(schedule);
    });
  }
});
