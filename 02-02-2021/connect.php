<?php
$error = 'could not connect';

$host = 'localhost';
$user='root';
$pass='';
$dbname = 'test';

$con =mysqli_connect($host,$user,$pass,$dbname);

if($con){
    echo 'Connected !!!';
}else{
    die($error);
}

?>