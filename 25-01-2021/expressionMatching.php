<?php 
    $str1 = "Hello World";
    $str2 = '/Hello/';

    if(preg_match($str2,$str1)){
        echo 'Match Found!! <br>';
    }else{
        echo 'No match found <br>';
    }

    $str1 = "Hello World";
    $str2 = '/bye/';

    if(preg_match($str2,$str1)){
        echo 'Match Found!!';
    }else{
        echo 'No match found';
    }
?>