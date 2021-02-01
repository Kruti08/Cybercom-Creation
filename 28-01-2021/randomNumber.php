<?php

    //Any random number
    $randomNumbers = rand();
    echo "Random number: ".$randomNumbers."<br>";

    //Maximum random number generated
    $randomNumbers = getrandmax();
    echo "Random number: ".$randomNumbers."<br>";

    //Random number between 1 to 6
    $randomNumbers = rand(1,6);
    echo "Random number between 1 to 6: ".$randomNumbers."<br>";
?>
