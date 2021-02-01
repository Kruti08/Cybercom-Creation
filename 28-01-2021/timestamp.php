<?php
    $time = time();
    $actual_time = date('H:i:s',$time);  
    $actual1_time = date('D M Y @ H:i:s',$time); 
    echo 'The current time is '.$time."<br>";
    echo 'The actual time is: '.$actual_time."<br>";
    echo 'The actual time with date is: '.$actual1_time."<br>";
?>

