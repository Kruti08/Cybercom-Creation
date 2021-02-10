<?php
    require ("connection.php");
    
    $id=$_POST['id'];
    $delete="DELETE FROM user WHERE id='$id'";
    $result=mysqli_query($con,$delete);
?>