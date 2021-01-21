function validateAdmin(){
    var email1=document.getElementById("email").value;
    var pwd1=document.getElementById("pwd").value;

    const admin=JSON.parse(window.localStorage.getItem(email1));
    const adminEmail=admin.email;
    const adminPassword=admin.password;

    if(email1!=adminEmail || pwd1!=adminPassword){
        alert("Incorrect Email or Password");
    }
    else{
        window.location.href="F:/Cybercom-Creation/Test-1/Dashborad.html";
    }
}