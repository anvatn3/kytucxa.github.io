let dashboard = document.getElementById("dashboard");
let rent = document.getElementById("rent");
let myRoom = document.getElementById("myRoom");
let myInfor = document.getElementById("myInfor");
let passwordChange = document.getElementById("passwordChange");
let dormitory = document.getElementById("dormitory");

let dbView = document.getElementById("dbView");
let rentView = document.getElementById("rentView");
let mrView = document.getElementById("mrView");
let miView = document.getElementById("miView");
let pcView = document.getElementById("pcView");
let dormiView = document.getElementById("dormiView");
let avatarImg1 = document.getElementById("avatarImg1");
let listNow = document.getElementById("listNow");

listNow.innerHTML = "Trang Chủ";

dbView.style.display = "";
rentView.style.display = "none";
mrView.style.display = "none";
miView.style.display = "none";
pcView.style.display = "none";
dormiView.style.display = "none";

dashboard.classList.add("listSelect");
rent.classList.remove("listSelect");
myRoom.classList.remove("listSelect");
myInfor.classList.remove("listSelect");
passwordChange.classList.remove("listSelect");
dormitory.classList.remove("listSelect");

dashboard.addEventListener("click", () => {
  listNow.innerHTML = "Trang Chủ";

  dashboard.classList.add("listSelect");
  rent.classList.remove("listSelect");
  myRoom.classList.remove("listSelect");
  myInfor.classList.remove("listSelect");
  passwordChange.classList.remove("listSelect");
  dormitory.classList.remove("listSelect");

  dbView.style.display = "";
  rentView.style.display = "none";
  mrView.style.display = "none";
  miView.style.display = "none";
  pcView.style.display = "none";
  dormiView.style.display = "none";
});
rent.addEventListener("click", () => {
  listNow.innerHTML = "Thuê Phòng";

  dashboard.classList.remove("listSelect");
  rent.classList.add("listSelect");
  myRoom.classList.remove("listSelect");
  myInfor.classList.remove("listSelect");
  passwordChange.classList.remove("listSelect");
  dormitory.classList.remove("listSelect");

  dbView.style.display = "none";
  rentView.style.display = "";
  mrView.style.display = "none";
  miView.style.display = "none";
  pcView.style.display = "none";
  dormiView.style.display = "none";
});
myRoom.addEventListener("click", () => {
  listNow.innerHTML = "Phòng Của Tôi";

  dashboard.classList.remove("listSelect");
  rent.classList.remove("listSelect");
  myRoom.classList.add("listSelect");
  myInfor.classList.remove("listSelect");
  passwordChange.classList.remove("listSelect");
  dormitory.classList.remove("listSelect");

  dbView.style.display = "none";
  rentView.style.display = "none";
  mrView.style.display = "";
  miView.style.display = "none";
  pcView.style.display = "none";
  dormiView.style.display = "none";
});
myInfor.addEventListener("click", () => {
  listNow.innerHTML = "Thông Tin Của Tôi";

  dashboard.classList.remove("listSelect");
  rent.classList.remove("listSelect");
  myRoom.classList.remove("listSelect");
  myInfor.classList.add("listSelect");
  passwordChange.classList.remove("listSelect");
  dormitory.classList.remove("listSelect");

  dbView.style.display = "none";
  rentView.style.display = "none";
  mrView.style.display = "none";
  miView.style.display = "";
  pcView.style.display = "none";
  dormiView.style.display = "none";
});
avatarImg1.addEventListener("click", () => {
  listNow.innerHTML = "Thông Tin Của Tôi";

  dashboard.classList.remove("listSelect");
  rent.classList.remove("listSelect");
  myRoom.classList.remove("listSelect");
  myInfor.classList.add("listSelect");
  passwordChange.classList.remove("listSelect");
  dormitory.classList.remove("listSelect");

  dbView.style.display = "none";
  rentView.style.display = "none";
  mrView.style.display = "none";
  miView.style.display = "";
  pcView.style.display = "none";
  dormiView.style.display = "none";
});
passwordChange.addEventListener("click", () => {
  listNow.innerHTML = "Đổi Mật Khẩu";

  dashboard.classList.remove("listSelect");
  rent.classList.remove("listSelect");
  myRoom.classList.remove("listSelect");
  myInfor.classList.remove("listSelect");
  passwordChange.classList.add("listSelect");
  dormitory.classList.remove("listSelect");

  dbView.style.display = "none";
  rentView.style.display = "none";
  mrView.style.display = "none";
  miView.style.display = "none";
  pcView.style.display = "";
  dormiView.style.display = "none";
});
dormitory.addEventListener("click", () => {
  listNow.innerHTML = "Thông Tin Ký Túc Xá";

  dashboard.classList.remove("listSelect");
  rent.classList.remove("listSelect");
  myRoom.classList.remove("listSelect");
  myInfor.classList.remove("listSelect");
  passwordChange.classList.remove("listSelect");
  dormitory.classList.add("listSelect");

  dbView.style.display = "none";
  rentView.style.display = "none";
  mrView.style.display = "none";
  miView.style.display = "none";
  pcView.style.display = "none";
  dormiView.style.display = "";
});
// room
let rooms = [
  {
    name: "101",
    area: "D1",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "102",
    area: "D1",
    price: "170",
    curPeople: "8",
    maxPeople: "8",
    status: "Không",
  },
  {
    name: "103",
    area: "D1",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "104",
    area: "D1",
    price: "170",
    curPeople: "4",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "105",
    area: "D1",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "201",
    area: "D1",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "202",
    area: "D1",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "203",
    area: "D1",
    price: "170",
    curPeople: "2",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "204",
    area: "D1",
    price: "170",
    curPeople: "2",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "205",
    area: "D1",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "301",
    area: "D1",
    price: "230",
    curPeople: "0",
    maxPeople: "6",
    status: "Có",
  },
  {
    name: "302",
    area: "D1",
    price: "230",
    curPeople: "3",
    maxPeople: "6",
    status: "Có",
  },
  {
    name: "303",
    area: "D1",
    price: "230",
    curPeople: "1",
    maxPeople: "6",
    status: "Có",
  },
  {
    name: "304",
    area: "D1",
    price: "230",
    curPeople: "6",
    maxPeople: "6",
    status: "Không",
  },
  {
    name: "305",
    area: "D1",
    price: "230",
    curPeople: "6",
    maxPeople: "6",
    status: "Không",
  },

  {
    name: "101",
    area: "D2",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "102",
    area: "D2",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "103",
    area: "D2",
    price: "170",
    curPeople: "2",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "104",
    area: "D2",
    price: "170",
    curPeople: "1",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "105",
    area: "D2",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "201",
    area: "D2",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "202",
    area: "D2",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "203",
    area: "D2",
    price: "170",
    curPeople: "1",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "204",
    area: "D2",
    price: "170",
    curPeople: "8",
    maxPeople: "8",
    status: "Không",
  },
  {
    name: "205",
    area: "D2",
    price: "170",
    curPeople: "0",
    maxPeople: "8",
    status: "Có",
  },
  {
    name: "301",
    area: "D2",
    price: "230",
    curPeople: "0",
    maxPeople: "6",
    status: "Có",
  },
  {
    name: "302",
    area: "D2",
    price: "230",
    curPeople: "0",
    maxPeople: "6",
    status: "Có",
  },
  {
    name: "303",
    area: "D2",
    price: "230",
    curPeople: "2",
    maxPeople: "6",
    status: "Có",
  },
  {
    name: "304",
    area: "D2",
    price: "230",
    curPeople: "1",
    maxPeople: "6",
    status: "Có",
  },
  {
    name: "305",
    area: "D2",
    price: "230",
    curPeople: "0",
    maxPeople: "6",
    status: "Có",
  },
];
let table = document.getElementById("rooms");
let detailRoom = document.getElementById("detailRoom");
let rentRoom = document.getElementById("rentRoom");
let roomTextTemp = document.getElementById("roomTextTemp");
let dbRoomTemp = document.getElementById("dbRoomTemp");
let notification = document.getElementById("notification");

function showDetailRoom(e, i) {
  e = rooms[i];
  detailRoom.innerHTML = `
  Tên phòng : ${e.name} <br />
  Khu : ${e.area} <br />
  Loại phòng: Phòng ${e.price}.000VND/1 người/1 tháng. Phòng ${e.maxPeople} bạn, giường
  tầng, nhà vệ sinh khép kín, tủ quần áo, điều hòa, bình nóng lạnh. <br />
  Số lượng người hiện tại : ${e.curPeople}/${e.maxPeople} <br />
  <b>${e.status} thể thuê</b>`;
}

function showRentRoom(e, i) {
  e = rooms[i];
  rentRoom.innerHTML = `Tên phòng : ${e.name} <br />
  Khu : ${e.area} <br />`;
  roomTextTemp.innerHTML = `
  Tên phòng : ${e.name} <br />
  Khu : ${e.area} <br />
  Loại phòng: Phòng ${e.price}.000VND/1 người/1 tháng. Phòng ${e.maxPeople} bạn, giường
  tầng, nhà vệ sinh khép kín, tủ quần áo, điều hòa, bình nóng lạnh. <br />
  Số lượng người hiện tại : ${e.curPeople}/${e.maxPeople} <br /> <br />
  <button type="button" id="changeRoom">
    Đổi phòng<i class="fa-solid fa-arrows-rotate"></i>
  </button>
  `;
  dbRoomTemp.innerHTML = `${e.name} ${e.area}`;
}
function removeNoti() {
  notification.classList.remove("showNoti");
}
function checkRent(e, i) {
  e = rooms[i];
  if (e.curPeople == e.maxPeople) {
    notification.style.backgroundColor = "#d63031";
    notification.innerHTML = `<i class="fa-solid fa-house-medical-circle-xmark"></i> Phòng đã đầy`;

    notification.classList.add("showNoti");
    setTimeout(removeNoti, 5000);
  } else {
    showRentRoom(e, i);
    roomRent.classList.add("showroomDetail");
  }
}

document.querySelectorAll(".fa-circle-info").forEach((e) => {
  e.addEventListener("click", () => {
    showDetailRoom(e, e.id);
    roomDetail.classList.add("showroomDetail");
  });
});
document.querySelectorAll(".fa-house-medical").forEach((e) => {
  e.addEventListener("click", () => {
    checkRent(e, e.id);
  });
});

let input = document.getElementById("searchRoom");
let priceOption = document.getElementById("price");
let areaOption = document.getElementById("area");
let statusOption = document.getElementById("status");

function tableSearch() {
  //Intialising Variables
  let filter = input.value.toUpperCase();
  let tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        areaOption.selectedIndex = 0;
        priceOption.selectedIndex = 0;
        statusOption.selectedIndex = 0;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function getArea() {
  let selectedValue = document.getElementById("area").value;

  tr = table.getElementsByTagName("tr");
  console.log(selectedValue);
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    txtValue = td.textContent || td.innerText;
    console.log(td.innerText);
    if (selectedValue == "none") {
      tableSearch();
    } else {
      input.value = "";
      if (txtValue == selectedValue) {
        tr[i].style.display = "";
        priceOption.selectedIndex = 0;
        statusOption.selectedIndex = 0;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function getPrice() {
  let selectedValue = document.getElementById("price").value;

  tr = table.getElementsByTagName("tr");
  // console.log(selectedValue);
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    txtValue = td.textContent || td.innerText;
    console.log(td.innerText);
    if (selectedValue == "none") {
      tableSearch();
    } else {
      input.value = "";
      if (txtValue == selectedValue) {
        tr[i].style.display = "";
        areaOption.selectedIndex = 0;
        statusOption.selectedIndex = 0;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function getStatus() {
  let selectedValue = document.getElementById("status").value;

  tr = table.getElementsByTagName("tr");
  // console.log(selectedValue);
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    txtValue = td.textContent || td.innerText;
    console.log(td.innerText);
    if (selectedValue == "none") {
      tableSearch();
    } else {
      input.value = "";
      if (txtValue == selectedValue) {
        tr[i].style.display = "";
        areaOption.selectedIndex = 0;
        priceOption.selectedIndex = 0;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
document.getElementById("resetFilter").addEventListener("click", () => {
  input.value = "";
  tableSearch();
  areaOption.selectedIndex = 0;
  priceOption.selectedIndex = 0;
  statusOption.selectedIndex = 0;
});
function kindRoom() {
  tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    // txtValue = td.textContent || td.innerText;
    // console.log(td.innerText);
    if (td.innerText == "Trống") {
      td.style.color = "#1dd1a1";
    } else if (td.innerText == "Còn") {
      td.style.color = "#feca57";
    } else {
      td.style.color = "#ee5253";
    }
  }
}
kindRoom();

let closeDetail = document.getElementById("closeDetail");
let closeRent = document.getElementById("closeRent");
let roomDetail = document.getElementById("roomDetail");
let roomRent = document.getElementById("roomRent");
let resetRent = document.getElementById("resetRent");

closeDetail.addEventListener("click", () => {
  roomDetail.classList.remove("showroomDetail");
});
closeRent.addEventListener("click", () => {
  roomRent.classList.remove("showroomDetail");
});

function addMonths(numOfMonths, date = new Date()) {
  const dateCopy = new Date(date.getTime());
  dateCopy.setMonth(dateCopy.getMonth() + numOfMonths);
  return dateCopy;
}
let dateRent = document.getElementById("dateRent");
let priceRent = document.getElementById("priceRent");
dateRent.style.color = "#ee5253";
priceRent.style.color = "#ffeaa7";
function timeRent2() {
  let selectedValue = document.getElementById("timeRent").value;

  let price = 170;
  let dem = 0;

  let today = new Date();
  let dd1 = today.getDate();
  let mm1 = today.getMonth() + 1; //January is 0!
  let yyyy1 = today.getFullYear();
  if (dd1 < 10) {
    dd1 = "0" + dd1;
  }
  if (mm1 < 10) {
    mm1 = "0" + mm1;
  }
  let toDay = dd1 + "/" + mm1 + "/" + yyyy1;

  let result = addMonths(1, today);
  // if (selectedValue == "none") {
  //   dateRent.style.display = "none";
  // } else
  if (selectedValue == "1 tháng") {
    result = addMonths(1, today);
    dem = 1;
    price = price * dem;
  } else if (selectedValue == "2 tháng") {
    result = addMonths(2, today);
    dem = 2;
    price = price * dem;
  } else if (selectedValue == "3 tháng") {
    result = addMonths(3, today);
    dem = 3;
    price = price * dem;
  } else if (selectedValue == "6 tháng") {
    result = addMonths(6, today);
    dem = 6;
    price = price * dem;
  } else if (selectedValue == "1 năm") {
    result = addMonths(12, today);
    dem = 12;
    price = price * dem;
  }

  let dd2 = result.getDate();
  let mm2 = result.getMonth() + 1; //January is 0!
  let yyyy2 = result.getFullYear();
  if (dd2 < 10) {
    dd2 = "0" + dd2;
  }
  if (mm2 < 10) {
    mm2 = "0" + mm2;
  }

  let dayAfterMonth = dd2 + "/" + mm2 + "/" + yyyy2;
  console.log(toDay);
  console.log(dayAfterMonth);
  if (selectedValue == "none") {
    dateRent.innerHTML = "";
    priceRent.innerHTML = "";
  } else {
    dateRent.innerHTML =
      toDay + ` <i class="fa-solid fa-right-long"></i> ` + dayAfterMonth;
    priceRent.innerHTML = price + "K";
    console.log(price);
  }

  const timeleft = result - today;

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  console.log(days + " ngày " + hours + " giờ " + minutes + " phút ");
  timeRemaining.innerHTML =
    days + " ngày" + `</br>` + hours + " giờ" + `</br>` + minutes + " phút";
}

resetRent.addEventListener("click", () => {
  dateRent.innerHTML = "";
  priceRent.innerHTML = "";
});
let dbRoom = document.getElementById("dbRoom");
let dbTime = document.getElementById("dbTime");
dbRoom.innerHTML = `<b>Bạn chưa thuê phòng nào!</b>`;
dbTime.innerHTML = `<b>Bạn chưa có thời gian thuê!</b>`;

let roomText = document.getElementById("roomText");
roomText.innerHTML = `<br /> <br /> <br /> <br /> <b>Bạn chưa thuê phòng nào!</b>`;
let timeRoomRent = document.getElementById("timeRoomRent");
let roomPrice = document.getElementById("roomPrice");

let timeRemaining = document.getElementById("timeRemaining");

document.getElementById("submitRent").addEventListener("click", () => {
  if (priceRent.innerHTML == "") {
    dateRent.innerHTML = "Chọn thời gian thuê";
  } else {
    roomRent.classList.remove("showroomDetail");
    notification.style.backgroundColor = "#00b894";
    notification.innerHTML = `<i class="fa-solid fa-house-medical-circle-check"></i>Yêu cầu đã được gửi đi!`;
    notification.classList.add("showNoti");
    setTimeout(removeNoti, 5000);
    roomText.innerHTML = roomTextTemp.innerHTML;
    dbRoom.style.fontWeight = "700";
    dbRoom.style.fontSize = "100px";
    dbRoom.innerHTML = dbRoomTemp.innerHTML;
    dbTime.style.fontWeight = "700";
    dbTime.style.fontSize = "30px";
    dbTime.innerHTML = dateRent.innerHTML;
    timeRoomRent.innerHTML = dateRent.innerHTML;
    roomPrice.innerHTML = priceRent.innerHTML;
  }
});

// myInfor
let editMyInfor = document.getElementById("editMyInfor");
let saveMyInfor = document.getElementById("saveMyInfor");
let contentInput = document.getElementById("contentInput");
let myId = document.getElementById("myId");
let myName = document.getElementById("myName");
let userName = document.getElementById("userName");

myName.value = "Nguyễn Văn A";
userName.innerHTML = myName.value;
saveMyInfor.style.backgroundColor = "#636e72";

contentInput.classList.add("editDisnable");
editMyInfor.classList.remove("editDisnable");
saveMyInfor.classList.add("editDisnable");

myId.classList.add("editDisnable");
editMyInfor.addEventListener("click", () => {
  contentInput.classList.remove("editDisnable");
  editMyInfor.classList.add("editDisnable");
  saveMyInfor.classList.remove("editDisnable");
  editMyInfor.style.backgroundColor = "#636e72";
  saveMyInfor.style.backgroundColor = "#fdcb6e";
  myName.focus();
});
saveMyInfor.addEventListener("click", () => {
  contentInput.classList.add("editDisnable");
  editMyInfor.classList.remove("editDisnable");
  saveMyInfor.classList.add("editDisnable");
  editMyInfor.style.backgroundColor = "#00cec9";
  saveMyInfor.style.backgroundColor = "#636e72";
  userName.innerHTML = myName.value;
});
let inputImg = document.getElementById("file-input");
let image1 = document.getElementById("avatarImg1");
let image2 = document.getElementById("avatarImg2");

inputImg.addEventListener("change", (e) => {
  if (e.target.files.length) {
    let src = URL.createObjectURL(e.target.files[0]);
    image1.src = src;
    image2.src = src;
  }
});

// passwordChange
let curPass = document.getElementById("curPass");
let newPass = document.getElementById("newPass");
let verfPass = document.getElementById("verfPass");
let savePass = document.getElementById("savePass");
let messPass = document.getElementById("messPass");
messPass.style.color = "#d63031";
messPass.style.fontWeight = "500";
savePass.classList.add("editDisnable");

function checkPass() {
  if (curPass.value != "" && newPass.value != "" && verfPass.value != "") {
    if (curPass.value == "1") {
      if (newPass.value == verfPass.value) {
        savePass.classList.remove("editDisnable");
        savePass.style.backgroundColor = "#fdcb6e";
        messPass.innerHTML = "";
      } else {
        savePass.classList.add("editDisnable");
        savePass.style.backgroundColor = "#636e72";
        messPass.innerHTML = "Mật khẩu xác thực chưa đúng!";
      }
    } else {
      messPass.innerHTML = "Mật khẩu hiện tại chưa đúng!";
    }
    if (curPass.value == "1" && newPass.value == verfPass.value) {
      savePass.classList.remove("editDisnable");
      savePass.style.backgroundColor = "#fdcb6e";
    } else {
      savePass.classList.add("editDisnable");
      savePass.style.backgroundColor = "#636e72";
    }
  } else {
    savePass.classList.add("editDisnable");
    savePass.style.backgroundColor = "#636e72";
  }
}
savePass.addEventListener("click", () => {
  savePass.classList.add("editDisnable");
  savePass.style.backgroundColor = "#636e72";
  curPass.value = "";
  newPass.value = "";
  verfPass.value = "";
  successRent.innerHTML = `<i class="fa-solid fa-circle-check"></i>
  Đổi mật khẩu thành công!`;
  successRent.classList.add("showSuccessRent");
});
// let userOption = document.getElementById("userOption");
// userOption.style.display = "none";
// let userClick = true;

// let notiOption = document.getElementById("notiOption");
// notiOption.style.display = "none";
// let bellClick = true;

// window.onload = function () {
//   document.onclick = function (u) {
//     // if (u.target.id == "userOption" && userClick == false) {
//     //   userOption.style.display = "block";
//     //   userClick = false;
//     // } else if (u.target.id == "userAvatar" && userClick == true) {
//     //   userOption.style.display = "block";
//     //   userClick = false;
//     // } else {
//     //   userOption.style.display = "none";
//     //   userClick = true;
//     // }
//     if (u.target.id == "notiOption" && bellClick == false) {
//       notiOption.style.display = "block";
//       bellClick = false;
//     } else if (u.target.id == "notification" && bellClick == true) {
//       notiOption.style.display = "block";
//       bellClick = false;
//     } else {
//       notiOption.style.display = "none";
//       bellClick = true;
//     }
//   };
// };

// const tableHeader = Object.keys(rooms[0]);
// const search = document.querySelector(".searchRoom");
// const output = document.querySelector(".mainRooms");

// window.addEventListener("DOMContentLoaded", loadTable);
// search.addEventListener("input", filter);

// function loadTable() {
//   let temp = ``;
//   // tableHeader.forEach(
//   //   (header) => (temp += `<th> ${header.toUpperCase()} </th>`)
//   // );
//   // temp += `<tr>`;
//   rooms.forEach((row) => {
//     temp += `
//         <tr>
//           <td>${row.name}</td>
//           <td>${row.area}</td>
//           <td>${row.type}</td>
//           <td>${row.curPeople}${row.maxPeople}</td>
//           <td>${row.status}</td>
//           <td>
//             <input id="pr" type="button" class="pickRoom" value="Thuê" />
//           </td>
//         </tr>
//         `;
//   });
//   // temp += `</table>`;
//   output.innerHTML = temp;
// }

// function filter(e) {
//   let results;
//   let temp = "";

//   results = rooms.filter((item) =>
//     item.name.toLowerCase().includes(e.target.value.toLowerCase())
//   );
//   console.log(results);
//   if (results.length > 0) {
//     // temp = `<table> <tr>`;
//     // tableHeader.forEach(
//     //   (header) => (temp += `<th> ${header.toUpperCase()} </th>`)
//     // );
//     // temp += `<tr>`;
//     results.forEach((row) => {
//       temp += `
//             <tr >
//               <td>${row.name}</td>
//               <td>${row.area}</td>
//               <td>${row.type}</td>
//               <td>${row.curPeople}${row.maxPeople}</td>
//               <td>${row.status}</td>
//               <td>
//                 <input id="pr" type="button" class="pickRoom" value="Thuê" />
//               </td>
//             </tr>
//             `;
//     });
//     // temp += `</table>`;
//   } else {
//     temp = ``;
//   }

//   output.innerHTML = temp;
// }

//function showTable(curarray) {
// document.getElementById("rooms").innerHTML = `
//   <tr class="bg-primary text-white">
//     <td>name</td>
//     <td>area</td>
//     <td>type</td>
//     <td>maxPeople</td>
//     <td>status</td>

//   </tr>
// `;

//   if (curarray == "") {
//     document.getElementById("error").innerHTML = `Không tìm thấy phòng`;
//   } else {
//     document.getElementById("error").innerHTML = "";

//     for (let i = 0; i < curarray.length; i++) {
//       document.getElementById("rooms").innerHTML += `
//       <tr>
//         <td>${curarray[i].name}</td>
//         <td>${curarray[i].area}</td>
//         <td>${curarray[i].type}</td>
//         <td>${curarray[i].curPeople}${curarray[i].maxPeople}</td>
//         <td>${curarray[i].status}</td>

//       </tr>
//       `;
//     }
//   }
// }
//showTable(rooms);
// let newrooms = [];
// document.getElementById("searchRoom").addEventListener("keyup", function () {
//   let search = this.value.toLowerCase();
//   newrooms = rooms.filter(function (val) {
//     if (val.name.includes(search)) {
//       let newobj = {
//         name: val.name,
//         area: val.area,
//         type: val.type,
//         curPeople: val.curPeople,
//         maxPeople: val.maxPeople,
//         status: val.status,
//       };
//       return newobj;
//     }
//   });
//   showTable(newrooms);
//   console.log(newrooms);
// });
