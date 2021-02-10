<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <meta content="text/html" charset="utf-8">
        <link rel="stylesheet" href="CSS/index.css">
    </head>
    <body>
        <br><br><br><br><br>
        <center>
        <div class="container">
            <center><img src="Images/img.PNG"></center>
            <center> <h2>Login</h2> </center>
            <form id="_form" method="POST">
                    <div class="element">
                        <input type="email" placeholder="Email" id="email" name="email" required>
                    </div>
                    <div class="element">
                        <input type="password" name="pwd" id="pwd" name="password" required placeholder="password">
                    </div>
                    <div class="element">
                        <input type="submit" id="btn1" name="login" onclick="javascript: form.action='#';" value="Login">
                        <input  type="submit" id="btn2" name="register" onclick="javascript: form.action='Register.php';"  value="REGISTER NOW">
                    </div>       
            </form> 
        </div>
        </center>
        <script src="JS/login.js"></script>
    </body>
</html>

<?php

require ('Database/connection.php');
session_start();
$email= "";
$password="";
$errors = array(); 
if(isset($_POST['login']) && !empty(isset($_POST['login']))){
    $email=$_POST['email'];
    $password=$_POST['pwd'];

    if (empty($email)) { array_push($errors, "Email is required"); }
    if (empty($password_1)) { array_push($errors, "Password is required"); }

    if (count($errors) == 0) {
        $password = md5($password);
        $query = "SELECT * FROM `user` WHERE `Email`='$email' AND Password_hash='$password'";
        $results = mysqli_query($db, $query);
        if (mysqli_num_rows($results) == 1) {
          $_SESSION['email'] = $email;
          $_SESSION['success'] = "You are now logged in";
          $_SESSION['userid'] = $results['$id'];
          header('location: blogpost.php');
        }else {
            array_push($errors, "Wrong Email/password combination");
        }
    }
}
?>