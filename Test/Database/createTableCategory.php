<?php
    require 'connection.php';

    $sql = "CREATE TABLE category (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        parent_category_id VARCHAR(10) NOT NULL,
        Title VARCHAR(30) NOT NULL,
        Meta_Title VARCHAR(30) NOT NULL,
        Url_ VARCHAR(255) NOT NULL,
        Content VARCHAR(255) NOT NULL,
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