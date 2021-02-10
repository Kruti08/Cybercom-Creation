<?php 
  session_start(); 

  if (!isset($_SESSION['email'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: index.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['email']);
  	header("location: lindex.php");
  }
?>

<html>
    <head>
        <title>Category Page</title>
        <link rel="stylesheet" href="CSS/blogApp.css">
    </head>
    <body>
        <br>
        <br>
        <br>
        <center>
        <div class="container">
        <h2>Add New Category</h2>
        <form method="POST">
            <div class="element">
                <label for="title">Title &nbsp &nbsp &nbsp &nbsp &nbsp</label>
                <input type="text" class="ele" name="title" id="title" required>
            </div>
            <div class="element">
                <label for="content">Content &nbsp &nbsp</label>
                <textarea name="content" id="content" cols="50" rows="5"></textarea>
            </div>
            <div class="element">
                <label for="url">URL &nbsp &nbsp &nbsp &nbsp</label>
                <input type="url" class="ele" name="url" id="url" required>
            </div>
            <div class="element">
                <label for="meta">Meta Title</label>
                <input type="text" class="ele" name="meta" id="meta" required >
            </div>
            <br>
            <div class="element">
                <label for="parentEle">Par. category</label>
                <select name="parentEle" id="parentEle">
                    <option value="LifeStyle">Lifestyle</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Music">Music</option>
                </select>
            </div>
            <div>
                <label id="fil1" for="file">Image</label>
                <input type="file" name="file" id="file" value="Upload Image" required>
            </div>
            <br>
            <br>
            <div class="element">
                <input type="submit" id="btn2" name="submit" value="REGISTER NOW">
            </div>         
        </form>
    </div>
    </center>
    </body>
</html>
