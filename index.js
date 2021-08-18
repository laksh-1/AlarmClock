console.log("AlarmClock");

function updateTime() {
  let time = new Date();
  // console.log(time.getHours(), time.getMinutes(), time.getSeconds());
  let hours = time.getHours();
  let minutes = time.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = time.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let timeText = `${hours}:${minutes}:${seconds}`;
  let currentTime = document.getElementById("currentTime");
  currentTime.innerText = timeText;

  let date = time.getDate();
  date = date < 10 ? "0" + date : date;
  let month = time.getMonth();
  month = month < 10 ? "0" + month : month;
  let year = time.getFullYear();
  let dateText = `${date}-${month}-${year}`;
  let currentDate = document.getElementById("currentDate");
  currentDate.innerText = dateText;
}
setInterval(updateTime, 1000);

let setAlarm = document.getElementById("setAlarm");

setAlarm.addEventListener("click", () => {
  let alarmHour = document.getElementById("alarmHour");
  let alarmMinute = document.getElementById("alarmMinute");
  let alarmSecond = document.getElementById("alarmSecond");
  console.log(alarmHour.value, alarmMinute.value, alarmSecond.value);
  let currentAlarm = document.getElementById("currentAlarm");
  let html = `Alarm is set for ${alarmHour.value}:${alarmMinute.value}:${alarmSecond.value}`;
  currentAlarm.innerText = html;
  window.scrollTo(0, document.body.scrollHeight);
  event.preventDefault();
});

function checkAlarm() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  if (
    alarmHour.value == hours &&
    alarmMinute.value == minutes &&
    alarmSecond.value == seconds
  ) {
    console.log("Alarm Goes off...!!!");
    let currentAlarm = document.getElementById("currentAlarm");
    currentAlarm.innerText = `No current alarm.`;
    var audio = new Audio("alarmSound.mp3");
    audio.play();
  }
}
setInterval(checkAlarm, 1000);
