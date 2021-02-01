<?php
   $food = array('Pasta','pizza','Burger');
   
   echo $food[1]."<br>";
   print_r($food);

   $values = array(2,54,23,65,43,84);
   
   echo "<br>".$values[3]."<br>";
   print_r($values);

   $food1 = array('Pasta'=>45,'pizza'=>433,'Burger'=>543);
   
   echo "<br>".$food1['pizza']."<br>";
   print_r($food1);
   
?>