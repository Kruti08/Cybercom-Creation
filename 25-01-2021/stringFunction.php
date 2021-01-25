<?php
    $str="Hello World, Good Morning !!!!";

    //Various String Functions

    //To count the words in string
    $word_count = str_word_count($str);
    echo $word_count."<br>";

    //To get the string in array form
    $words = str_word_count($str,1);
    print_r($words)."<br>";

    //To get the index where the word starts
    $word = str_word_count($str,2);
    print_r($word);
    echo "<br>";

    //To add the symbols in count
    $word = str_word_count($str,1,'!&.');
    print_r($word);
    echo "<br>";

    //To shuffle the characters in string
    $str_sfle = str_shuffle($str);
    echo $str_sfle."<br>";

    //To take specific part of string (Substring)
    $substring=substr($str,0,5);
    echo $substring."<br>";

    //To reverse the string
    $reverse=strrev($str);
    echo $reverse."<br>";

    //To find the similarities between two strings

    $str1="Good morning !!!";
    $str2="Good afternoon !!!";

    similar_text($str1,$str2,$result);
    echo "The similarities between strings are: ".$result."<br>";

    //To know the length of strings
    $strlen1=strlen($str);
    $strlen2=strlen($str1);
    $strlen3=strlen($str2);

    echo "Length of string 1: ".$strlen1."<br>";
    echo "Length of string 2: ".$strlen2."<br>";
    echo "Length of string 3: ".$strlen3."<br>";

    //To remove the whitespace from both the side of string

    $string = "&nbsp;This is string...&nbsp;";
    echo $string;
?>