// function check data localstorge and put it in array
let arr = [];
//from signup page
document.getElementById("Submit").addEventListener("click", () => {
  let firstname = document.getElementById("fname");
  let lastname = document.getElementById("lname");
  let gender = document.getElementById("selectgend");
  let age = document.getElementById("Age");
  let phone = document.getElementById("tel");
  let mail = document.getElementById("email");
  let password = document.getElementById("pswrd");
  let conpass = document.getElementById("conpswrd");
  let city = document.getElementById("selectbox");
  if (
    firstname.value == "" ||
    lastname.value == "" ||
    phone.value == "" ||
    gender.value == "" ||
    mail.value == "" ||
    password.value == "" ||
    conpass.value == "" ||
    city.value == "" ||
    age.value == ""
  ) {
    alert("One Or More Input Value Is Missing");
  }

  // check if all the input true:
  if (Emailtovalidate(mail.value) == true && checkage(age.value) == true && matchpass(password.value, conpass.value)) {
    let obj = {
      first_name: firstname.value,
      last_name: lastname.value,
      age: age.value,
      gender: gender.value,
      number_phone: phone.value,
      email: mail.value,
      pass: password.value,
      conpass: conpass.value,
      city: city.value,
    };
    arr.push(obj);
    saveLocal();
  }
  // reset inputs value;
  firstname.value = "";
  lastname.value = "";
  age.value = "";
  gender.value = "";
  phone.value = "";
  mail.value = "";
  password.value = "";
  conpass.value = "";
  city.value = "";
});

//Entering data into the Local storage:
function saveLocal() {
  localStorage.setItem("my_personal_data", JSON.stringify(arr));
}

function setitem() {
  if (localStorage.getItem("my_personal_data")) {
    arr = JSON.parse(localStorage.getItem("my_personal_data"));
  }
  else {
    arr = [];
  }
}

//validate email :
function Emailtovalidate(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");

  }
}

// check if user enter a true age:
function checkage(age) {
  if (age < 0 || age > 100) {
    alert("enter a true age");
    return false;
  }
  else {
    return true;
  }
}

// check match password:
function matchpass(pass, conpas) {
  if (pass == conpas) {
    return true;
  }
  else {
    alert("password no match");
  }
}

let mailInput = document.getElementById("mailInput");
let passwordInput = document.getElementById("passwordInput");



function checkPassMail() {
  for (let i = 0; i < arr.length; i++) {
    if (mailInput.value == arr[i].email && passwordInput.value == arr[i].pass) {
      console.log("ok");
    } else {
      console.log("wrong");
    }
  }
}
