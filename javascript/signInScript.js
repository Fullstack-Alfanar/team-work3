//frome signin page

let arr = [];

document.getElementById("login").addEventListener("click", ()=>
{
  let mailInput = document.getElementById("mailInput");
  let passwordInput = document.getElementById("passwordInput");
  if (mailInput.value == "") {
    alert("Mail is missing");
  } else if (passwordInput.value == "") {
    alert("password is missing");
  } else {
    setitem();
    checkPassMail();
    
  }

  function setitem() {
    if (localStorage.getItem("my_personal_data")) {
      arr = JSON.parse(localStorage.getItem("my_personal_data"));
    }
  }

  // cheaking signin data
  function checkPassMail() {
    let IsCorrect = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        mailInput.value == arr[i].email &&
        passwordInput.value == arr[i].pass
      ) {
        IsCorrect.push(true);

      } else {
        IsCorrect.push(false);
      }
    }
    for (let i = 0; i < IsCorrect.length; i++) {
      if (IsCorrect[i] == true) {
        window.location.replace("/wellcom.html");
        break;
      } else {
        alert("wrong");
        break;
      }
    }
  }
  mailInput.value == "";
    passwordInput.value == "";
});
 