<?php 
session_start();
require ('Database/connection.php');

if(!isset($_SESSION['login'])){
    if(!$_SESSION['login']){
        header("location:index.php");
    }
}

if($_GET['action']=='create'){
    $_SESSION['action']='create';

}
elseif($_GET['action']=='update'){
    $_SESSION['action']='update';
    $_SESSION['id']=$_GET['id'];
}

if($_GET['action']=="update"){
    $fetchRecord="SELECT * from blog_post WHERE id='$_SESSION[id]'";
    $values=mysqli_query($link,$fetchRecord);
    
    if(mysqli_num_rows($values)!=0){
        while($row=mysqli_fetch_assoc($values)){
            $settitle=$row['title'];
            $setcontent=$row['content'];
            $seturl=$row['url'];
            $setpub=$row['published_at'];
            $category=serialize($row['category']);
            $image=$row['image']; 
        }
    }
?>

<html>
    <head>
        <title>Add New Blog</title>
        <link rel="stylesheet" href="CSS/blogApp.css">
    </head>
    <body>
        <br>
        <br>
        <br>
        <center>
        <div class="container">
        <h2>Add New Blog Post</h2>
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
                <label for="date">Published At</label>
                <input type="date" class="ele" name="date" id="date" required >
            </div>
            <br>
            <div class="element">
                <label for="parentEle">Category</label>
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

<?php

    require ('Database/connection.php');
    if(isset($_POST['submit'])){
        $title=$_POST['title'];
        $content=$_POST['content'];
        $url=$_POST['url'];
        $publishedAt=$_POST['date'];
        $image=$_POST['file'];
        $allowedImage = array("png","jpg","jpeg");
        
        $imgInfo=explode('.',$image);
        $imageExtension=strtolower(end($imgInfo));  
        $categories=array();
        
        if(isset($_POST['category'])){
        foreach($_POST['category'] as $category){
            array_push($categories,$category);
        }}
        
        $errors=array();

        if(strlen($title)==0){  array_push($errors,"Title field can't be empty");   }

        if(strlen($content)==0){  array_push($errors,"Content field can't be empty");  }
        if(!filter_var($url,FILTER_VALIDATE_URL)){
                array_push($errors,"Url is invalid");
         }else {
            $checkeURl="SELECT * from blog_post where url='$url' ";
            $result=mysqli_query($link,$checkeURl);
            if(mysqli_num_rows($result)>0){
                array_push($errArray,"url is already exist");               
            }       
         }

        if(count($categories)==0){
            array_push($errors,"Please select atleast one category");            
        }  

        if (! in_array($imgExtension, $alloweImage)) {
        array_push($errors,"Check image file ");

    }

    } 
    if(isset($errArray)){
        if(count($errArray)==0){
            echo "good"; 
             storeData($link,$title,$content,$url,$publishedAt,$categoryArray,$image);
        }
        else{
            foreach($errArray as $error){
                echo "Error: $error<br>";
            }
        
        }
    }

    
 function storeData($link,$title,$content,$url,$publishedAt,$categoryArray,$image){
    $serialize=serialize($categoryArray);
        $insertQue="INSERT INTO blog_post(uid,title,url,content,category,image,published_at) 
                    VALUES('$_SESSION[uid]','$title','$url','$content','$serialize','$image','$publishedAt')";
        if($exeQue=mysqli_query($link,$insertQue)){
            header("location:index.php");
        }else{
            echo "Errrorrr storing data, error: ".mysqli_error($link)." ErrorCode: ".mysqli_errno($link);
        };
}
?>

