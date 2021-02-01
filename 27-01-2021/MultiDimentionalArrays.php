<?php
    $details = array(
        'student1'=> array('abc',29,'7543535'),
        'student2'=> array('xyz',27,'7543535')
    );

    echo $details['student2'][1]."<br>";
    echo $details['student1'][0]."<br>";

    foreach($details as $elements => $inner_element){
        echo $elements."<br>";
        print_r($inner_element);
        echo "<br>";
    }    
?>