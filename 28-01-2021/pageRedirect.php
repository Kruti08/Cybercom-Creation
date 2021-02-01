<?php
    ob_start();
?>
<h1>My Page</h1>

<?php
    $redirect_page = 'http://google.co.uk';
    $redirect= TRUE;

    if($redirect==TRUE){
        header('Location: '.$redirect_page);
    }

    op_end_flush();
?>