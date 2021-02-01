<?php
    $find = array('alex','billy');
    $replace = array('a**x','b***y');

    if(isset($_POST['user_input']) && !empty($_POST['user_input'])){
        $user_input = $_POST['user_input'];
        $user_new = str_ireplace($find,$replace,$user_input);
        echo $user_new;
    }
?>

<hr>

    <form action="wordCensoring.php" method="POST">
        <textarea name="user_input" id="user" cols="30" rows="5"></textarea><br><br>
        <input type="submit" value="submit">
    </form>
