let myInfor = document.getElementById("myInfor");
myInfor.classList.add("listSelect");

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
let input = document.getElementById("file-input");
let image1 = document.getElementById("avatarImg1");
let image2 = document.getElementById("avatarImg2");

input.addEventListener("change", (e) => {
  if (e.target.files.length) {
    let src = URL.createObjectURL(e.target.files[0]);
    image1.src = src;
    image2.src = src;
  }
});
