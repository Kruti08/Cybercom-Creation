function getInfo(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("pwd").value;
    var rePwd=document.getElementById("pwd1").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;

    var user={
        Name:name,
        Email_id: email,
        Password: pwd,
        City:city,
        State:state
    }
    if(pwd==rePwd){
        window.localStorage.setItem(email, JSON.stringify(user));
        window.location.href="F:/Cybercom-Creation/Test-1/login.html";
        btn2.disabled=True;
    }else{
        alert("Error!!!");
    }    
}









