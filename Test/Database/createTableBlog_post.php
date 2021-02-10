<?php
    require 'connection.php';

    $sql = "CREATE TABLE blog_post (
        `id` INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        `User id` INT(11) UNSIGNED ,
        `Title` VARCHAR(30) NOT NULL,
        `Url` VARCHAR(255) NOT NULL,
        `Content` VARCHAR(255) NOT NULL,
        `Image` longblob NOt NULL, 
        Published_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        Created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        Updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )";

    if ($conn->query($sql) === TRUE) {
        echo "Table created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }
  
  $conn->close();

?>