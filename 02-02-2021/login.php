
<html>
<body>
    <form action="" method="POST">
        Username: <input type="text" name="username"><br><br>
        Password: <input type="password" name="password"><br><br>
        <input type="submit" value="submit" name="submit">       
    </form>
</body>
</html>

<?php
    require 'connect.php';
    require 'core.php'; 
    if(isset($_POST["username"]) && isset($_POST["password"])){
        $username = $_POST["username"];
        $password=$_POST["password"];        
        $password_hash = md5($password);
    }

    if(!empty($username) && !empty($password)){
        $query = "SELECT `user_id` from `user` WHERE `username`='$username' AND `password`='$password'";
        if($query_run=mysqli_query($con,$query)){
            $query_num_rows = mysqli_num_rows($query_run);
            if($query_num_rows==0){
                echo 'Invalid username or password';
            }
            else{
                $user_id = mysql_result($query_run,0,'user_id');
                $_SESSION['user_id'] = $user_id;
                header('Location: index.php');
            }
        } 
    }
?>
