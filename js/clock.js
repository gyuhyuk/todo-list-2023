const clock = document.querySelector("h2#clock");
const school = document.querySelector("h2#school");

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `NOW : ${year}-${month}-${days} ${hours}시 ${minutes}분 ${seconds}초`;
}

function getSchool() {
  const date = new Date();
  const open = new Date("2023-03-02");
  const answer = open - date;
  const day = Math.floor(answer / (1000 * 24 * 60 * 60));
  const hour = String(Math.floor((answer / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((answer / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((answer / 1000) % 60)).padStart(2, "0");
  school.innerText = `개강까지 ${day}일 ${hour}시간 ${minutes}분 ${seconds}초 ..`;
}

getClock();
setInterval(getClock, 1000);
getSchool();
setInterval(getSchool, 1000);
