function getInfo(){
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("pwd").value;
    var admin={
        Email_id: email,
        Password: pwd
    }
    window.localStorage.setItem('Admin', JSON.stringify(admin));
    alert(admin.email);
    alert(admin.pwd);
}








