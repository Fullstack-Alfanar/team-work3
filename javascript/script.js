if(!localStorage.getItem('my_personal_data')){
    localStorage.setItem('my_personal_data', 'pass');
  }
  
  function changePassBtnClick(){
    localStorage.setItem('my_personal_data', document.getElementById('changePass').value);
    alert('Password changed');
    
  }
  
  function loginBtnClick(){
    if(document.getElementById('login').value == localStorage.getItem('my_personal_data')){
      alert('Correct Login');
    }else{
      alert('Wrong Password');
    }
  }