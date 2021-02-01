<?php

//Use of String length
    $string = 'Hello world !!!';
    $len = strlen($string);

    for($x=1;$x<=$len;$x++){
        echo $x."<br>";
    }

    echo "String Length: ".$len."<br>";

//String upper and lower case

    $str_lower = strtolower($string);
    $str_upper = strtoupper($string);

    echo "String in Lower case: ".$str_lower."<br>";
    echo "String in Upper case: ".$str_upper."<br>";

// String position function
    $find='or';
    $strPos = strpos($string,$find);
    echo 'String position: '.$strPos."<br>";

    //In this we won't get any output as we are starting to search from position 9
    $strPos = strpos($string,$find,9);
    echo 'String position: '.$strPos."<br>";

//Replacing part of a string
    $subStr = "Universe";
    $newStr = substr_replace($string,$subStr,6,5);
    echo $newStr."<br>";
          
    $newStr=str_replace('world',$subStr,$string);
    echo $newStr."<br>";
?>
