<?php 
    $number1=5;
    $number2=10;

    function printLine1(){
        $number1=20;
        echo 'Local number1 value: '.$number1;
    }

    function printLine2(){
        global $number2;
        echo '<br>Global number2 value: '.$number2;
    }
    

printLine1();

printLine2();
?>
