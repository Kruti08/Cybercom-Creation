<?php
    //server variable allows us to know and access the environmental information
     
    $script_name = $_SERVER['SCRIPT_NAME'];
    echo "Script name: ".$script_name."<br>";

    $host_name = $_SERVER['HTTP_HOST'];
    echo "Host name: ".$host_name."<br>";
?>