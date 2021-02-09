<?php

    //Like is used to fetch the data with matching pattern
    $query1 = "SELECT * from student WHERE 'name' LIKE 'K%'";

    //To find pattern for few character in string
    $query2 = "SELECT * from student WHERE 'name' LIKE 'K__N_'";

    //To find pattern for few character in string
    $query3 = "SELECT * from student WHERE 'name' LIKE '%ru%'";

?>