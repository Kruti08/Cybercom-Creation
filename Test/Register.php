<html>
    <head>
        <title>Register Yourself!!</title>
        <link rel="stylesheet" href="CSS/register.css">
    </head>
    <body>
        <br>
        <br>
        <br>
    <center>
    <div class="container">
        <h2>REGISTER</h2>
        <form method="POST">
            <div class="element">
                <label for="prefix">Prefix &nbsp &nbsp &nbsp &nbsp</label>
                <select name="prefix" id="prefix">
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                </select>
            </div>
            <div class="element">
                <label for="firstname">First Name</label>
                <input type="text" class="ele" name="firstname" id="firstname" required>
            </div>
            <div class="element">
                <label for="lastname">Last Name</label>
                <input type="text" class="ele" name="lastname" id="lastname" required>
            </div>
            <div class="element">
                <label for="email">Email &nbsp &nbsp &nbsp &nbsp</label>
                <input type="email" class="ele" name="email" id="email" required>
            </div>
            <div class="element">
                <label for="mono">Mobile No</label>
                <input type="text" class="ele" name="mono" id="mono" required >
            </div>
            <div class="element">
                <label for="pwd">password &nbsp</label>
                <input type="password"  class="ele" name="pwd" id="pwd" required>
            </div>
            <div class="element">
                <label for="pwd1">Confirm pass.</label>
                <input type="password"  class="ele" name="pwd1" id="pwd1" required>
            </div>
            <div class="element">
                <label for="inf">Information</label>
                <input type="text"  class="ele" name="inf" id="inf" required>
            </div>
            <br>
            <input type="checkbox" name="chk" id="chk" required>Hereby,I Accept Terms & Conditions
            <div class="element">
                <input type="submit" id="btn2" name="submit" value="REGISTER NOW">
            </div>         
        </form>
    </div>
    </center>
    </body>
</html>

<?php

require ('Database/connection.php');
$errors=array();

if(isset($_POST['submit']) && !empty($_POST['submit'])){
    $prefix = $_POST['prefix']
    $f_name=$_POST['firstname'];;
    $l_name=$_POST['lastname'];;
    $email=$_POST['email'];;
    $mobile_no=$_POST['mono'];;
    $password=$_POST['pwd'];;
    $cofirm_password=$_POST['pwd1'];;
    $information=$_POST['inf'];
    $date = date("Y-m-d H:i:s"); 

    if (empty($prefix)) { array_push($errors, "Add Prefix"); }
    if (empty($f_name)) { array_push($errors, "First name required"); }
    if (empty($l_name)) { array_push($errors, "Last name required"); }
    if (empty($email)) { array_push($errors, "Email is required"); }
    if (empty($password)) { array_push($errors, "Password is required"); }
    if (empty($confirm_password)) { array_push($errors, "Confirm password field is empty"); }
    if (empty($information)) { array_push($errors, "Add information in this field"); }
    if ($password != $confirm_password) {
      array_push($errors, "The passwords do not match");
    }

    $password_hash=md5($password);

    $query = "SELECT * FROM `user` WHERE `Email`='$email' AND Password_hash='$password_hash'"; 
    $result = mysqli_query($db, $user_check_query);
    $user = mysqli_fetch_assoc($result);

    if ($user['Email'] === $email) {
        array_push($errors, "Email already exists");
    }
    if ($user['password_hash'] === $password_hash) {
        array_push($errors, "Use new password");
    }
    }

    if (count($errors) == 0) {
        $sql = "INSERT INTO `user`(`id`,`Prefix`,`firstname`, `lastname`, `Mobile`, `Email`, `Password_hash`, `information`, `Last_login`, `Created_at`, `Updated_at`) 
        VALUES (1,`$prefix`,`$f_name`,`$l_name`,$mobile_no,`$email`,`$password_hash`,`$information`,` $date`,` $date`,` $date`)";

        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
  
    mysqli_close($conn);
}
?>