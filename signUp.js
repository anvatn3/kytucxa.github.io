let signUpPopup = document.getElementById("signUpPopup");
let submitSignUp = document.getElementById("submitSignUp");
let masvSignUp = document.getElementById("masvSignUp");
let passwordSignUp = document.getElementById("passwordSignUp");
let passwordSignUpAgain = document.getElementById("passwordSignUpAgain");
let message = document.getElementById("message");
let switchLogin = document.getElementById("switchLogin");
signUpPopup.classList.remove("showPopup");
masvSignUp.classList.remove("error");
submitSignUp.addEventListener("click", function () {
  if (
    masvSignUp.value === "" ||
    passwordSignUp.value === "" ||
    passwordSignUpAgain.value === ""
  ) {
    masvSignUp.focus();
    message.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
  } else {
    if (passwordSignUp.value == passwordSignUpAgain.value) {
      message.innerHTML = "";
      signUpPopup.classList.add("showPopup");
    } else {
      message.innerHTML = "Mật khẩu nhập lại bị sai!";
    }
  }
});
signUpPopup.addEventListener("click", function () {
  signUpPopup.classList.remove("showPopup");
  switchLogin.click();
});
