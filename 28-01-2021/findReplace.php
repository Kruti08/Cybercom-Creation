<?php
    if(isset($_POST['user_input']) && !empty($_POST['user_input'])){
        $user_input = $_POST['user_input'];
        $search = $_POST['search'];
        $replace = $_POST['replace'];

        $new_string = str_replace($search,$replace,$user_input);
        echo $new_string;
    }  
?>
    <br>
    <hr>
    <form action="findReplace.php" method="POST">
        <textarea name="user_input" id="user" cols="30" rows="5"></textarea><br>
        <h4>Search for: </h4>
        <input type="text" name="search">
        <h4>Replace with: </h4>
        <input type="text" name="replace"><br><br>
        <input type="submit" value="submit">
    </form>
