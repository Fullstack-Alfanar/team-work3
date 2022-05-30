//frome signin page

let arr = [];

document.getElementById("btn").addEventListener("click", ()=>
{
  let mailInput = document.getElementById("email");
  let phoneInput = document.getElementById("phone");
  if (mailInput.value == "") {
    alert("Mail is missing");
  } else if (phoneInput.value == "") {
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
        phoneInput.value == arr[i].number_phone
      ) {
        IsCorrect.push(true);

      } else {
        IsCorrect.push(false);
      }
    }
    for (let i = 0; i < IsCorrect.length; i++) {
      if (IsCorrect[i] == true) {
        window.location.replace("/changepassword.html");
        break;
      } else {
        alert("wrong");
        break;
      }
    }
  }
    mailInput.value == "";
    phoneInput.value == "";
});