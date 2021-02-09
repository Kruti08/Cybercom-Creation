<?php
    require 'connect.php'
    //Left Join
    $query1 = "Select * From student LEFT JOIN faculty ON 'student'.'id'"

    //Right Join
    $query2 = "Select * From student RIGHT JOIN faculty ON 'student'.'id'"

    //Join
    $query3 = "Select * From student JOIN faculty ON 'student'.'id'"

?>