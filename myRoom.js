let myRoom = document.getElementById("myRoom");
myRoom.classList.add("listSelect");

function addMonths(numOfMonths, date = new Date()) {
  const dateCopy = new Date(date.getTime());
  dateCopy.setMonth(dateCopy.getMonth() + numOfMonths);
  return dateCopy;
}

let timeRoomRent = document.getElementById("timeRoomRent");

let dayBegin = new Date("12-10-2022");
let dd1 = dayBegin.getDate();
let mm1 = dayBegin.getMonth() + 1; //January is 0!
let yyyy1 = dayBegin.getFullYear();
if (dd1 < 10) {
  dd1 = "0" + dd1;
}
if (mm1 < 10) {
  mm1 = "0" + mm1;
}
let beginDay = dd1 + "-" + mm1 + "-" + yyyy1;

let dayEnd = addMonths(1, dayBegin);
// if (selectedValue == "none") {
//   timeRoomRent.style.display = "none";
// } else

let dd2 = dayEnd.getDate();
let mm2 = dayEnd.getMonth() + 1; //January is 0!
let yyyy2 = dayEnd.getFullYear();
if (dd2 < 10) {
  dd2 = "0" + dd2;
}
if (mm2 < 10) {
  mm2 = "0" + mm2;
}
let endDay = dd2 + "-" + mm2 + "-" + yyyy2;
console.log(beginDay);
console.log(endDay);

timeRoomRent.innerHTML =
  beginDay + ` <i class="fa-solid fa-right-long"></i> ` + endDay;

let today = new Date();
let dd3 = today.getDate();
let mm3 = today.getMonth() + 1; //January is 0!
let yyyy3 = today.getFullYear();
if (dd3 < 10) {
  dd3 = "0" + dd3;
}
if (mm3 < 10) {
  mm3 = "0" + mm3;
}
let toDay = dd3 + "-" + mm3 + "-" + yyyy3;

const timeleft = dayEnd - today;

const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

console.log(days + " ngày " + hours + " giờ " + minutes + " phút ");

let extraTime = document.getElementById("extraTime");
extraTime.style.color = "#ff7675";
extraTime.style.fontWeight = "800";
extraTime.style.fontSize = "40px";
extraTime.innerHTML =
  days + " ngày" + `</br>` + hours + " giờ" + `</br>` + minutes + " phút";
