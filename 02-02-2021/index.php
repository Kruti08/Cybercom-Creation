<?php
    require 'core.php';
    require 'connect.php';
   
   if(isset($_SESSION['user_id']) && !empty($_SESSION['user_id'])){
        echo 'You are logged in !!';
    } else{
        include 'login.php';
    }


?>