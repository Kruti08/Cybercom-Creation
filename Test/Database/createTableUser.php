<?php
    require 'connection.php';

    $sql = "CREATE TABLE user (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        Prefix VARCHAR(10) NOT NULL,
        firstname VARCHAR(10) NOT NULL,
        lastname VARCHAR(10) NOT NULL,
        Mobile INT(15) NOT NULL,
        Email VARCHAR(50) NOT NULL,
        Password_hash CHAR(60) NOT NULL,
        Information VARCHAR(200) NOT NULL,
        Last_login TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
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