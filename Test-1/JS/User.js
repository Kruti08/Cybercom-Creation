function addUserData(){
    var name1=document.getElementById("name").value;     
    var email=document.getElementById("email").value;
    var password=document.getElementById("pwd").value;
    var dob=document.getElementById("birthdate").value;
    var table=document.getElementsByTagName("table")[-1];

    var newRow =table.insertRow(1);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);
    var cell6=newRow.insertCell(5);

    var dobb = new Date(dob);
    var month_diff = Date.now()-dobb.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age=Math.abs(year-1970);

    var text= "Edit delete" ;

    cell1.innerHTML=name1;
    cell2.innerHTML=email;
    cell3.innerHTML=password;
    cell4.innerHTML=date;
    cell5.innerHTML=age;
    cell6.innerHTML=text;
}

window.onload=()=>{
    var usersArray=JSON.parse(localStorage.getItem('users'));
    writeOnPage(users); 
}

function adduser(){
    var obj=new NewEntry();

    if(localStorage.getItem('users')!==null){
        data=JSON.parse(localStorage.getItem('users'));
    }   
    data.push(obj);
    localStorage.setItem('users',JSON.stringify(data));
    viewUser();
}

function viewUser(){
    const usersArray=JSON.parse(localStorage.getItem('users'));
    const userName=[];
    const email=[];
    const password=[];
    const dob=[];
    const age=[]

   users.forEach((element)=>{
       userName.push(element.name);
       email.push(element.email);
       password.push(element.password);
       dob.push(element.dob);
       age.push(element.age);
   })



}
function writeOnPage(usersArray){
    data=users;    

    for(var i=0;i<data.length;i++){
        var tr=document.createElement('tr');
        for(const prop in data[i]){
            var td=document.createElement('td');
            td.innerText=data[i][prop];
            tr.appendChild(td);
        }   
        table.appendChild(tr);
    }
}