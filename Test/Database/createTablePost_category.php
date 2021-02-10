<?php
    require 'connection.php';

    $sql = "CREATE TABLE `post_category` (
        `Post id` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        `Cateogory id` INT(11) UNSIGNED 
    )";

    if ($conn->query($sql) === TRUE) {
        echo "Table created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }
  
  $conn->close();

?>