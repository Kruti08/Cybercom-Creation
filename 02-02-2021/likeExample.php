<html>
    <body>
        <p>Enter name:</p>
        <form action="#" method="POST">
            <input type="text" name="user" id="user">
            <input type="submit" value="submit">
        </form>
    </body>
</html>
<?php
    require 'connect.php';
    if(isset($_POST['user']) && !empty($_POST['user'])){
        $name = $_POST['user'];
        echo $name."<br>";
        $query = "SELECT * from student WHERE `name` Like '".$name."'"; 

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