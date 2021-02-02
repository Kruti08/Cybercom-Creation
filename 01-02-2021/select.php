<html>
    <head>
        <title>Select Exercise</title>
    </head>
    <body>

        <form action="#" method="GET">
            <select name="list">
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <input type="submit" value="submit">
        </form>
    </body>
</html>
<?php
    require 'connect.php';
    if(isset($_GET['list']) && !empty($_GET['list'])){
        $id = $_GET['list'];
        echo $id;
        $query = "SELECT * from student WHERE student_id='$id'";;

        $query_run = mysqli_query($con,$query);

        while ($row=mysqli_fetch_assoc($query_run)){
            $id = $row['student_id'];
            $name = $row['name'];
            $age = $row['age'];
            $department = $row['department'];

            echo "
            <table>
            <tbody>
                <tr>
                    <td>".$id."</td>
                    <td>".$name."</td> 
                    <td>".$age."</td> 
                    <td>".$department."</td><br>" 
                    ;
        }
    }    

?>

