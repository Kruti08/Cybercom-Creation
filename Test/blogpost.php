<html>
    <head>
        <title>Bolg Post</title>
        <link rel="stylesheet" href="CSS/blogpost.css">        
    </head>
    <body>
        <div class="container">
            <div class="btns">
                <input type="submit" id="bt1" name="category" value="Manage Category">
                <input type="submit" class="bt2" name="profile" value="My Profile">
                <input type="submit" id="bt3" name="log out" value="Log out">
            </div>
            <br>
            <h3>Blog Posts</h3>
            <br>
            <a href="newBlogPost.php"><input type="submit" class=bt2 name="add" value="Add Blog Post"></a>
            <br>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>Post ID</th>
                        <th>Category Name</th>
                        <th>Title</th>
                        <th>Published Date</th>
                        <th colspan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
            <?php /*
            $fetchQue="Select * from `category`";
            $result=mysqli_query($conn,$fetchQue);
            $num_Of_Record=mysqli_num_rows($result);
            $_SESSION['numOfRec']=$numOfRecord;
            if(mysqli_num_rows($result)>0){
                while($row=mysqli_fetch_assoc($result)){
                    ?>
                    <tr id="<?php echo $row['id']."row" ?>">
                        <td><?php echo $row['id'] ?></td>
                        <td><?php echo $row['Name'] ?></td>
                        <td><?php echo $row['Email'] ?></td>
                        <td><?php echo $row['Phone'] ?></td>
                        <td><?php echo $row['Title'] ?></td>
                        <td><?php echo $row['Created'] ?></td>
                        <td>
                            <form method="post">
                                <button name="btnEdit" class="btnEdit" id="<?php echo $row['id']?>">Edit</button>
                                <button name="btnDel" class="btnDel" id="<?php echo $row['id']."delete"?>">Delete</button>
                            </form>
                        </td>

                    </tr>
                    <?php
                }
            }else{
                ?>
                <tr>
                <td colspan="7">No Records Found!!</td>
                </tr>
                <?php
                $setIdQue="ALTER TABLE `user` AUTO_INCREMENT = 0;";
                $exeAboveQue=mysqli_query($link,$setIdQue);


            } --> 
            
            */?>
                </tbody>
            </table>

        </div>
    </body>
</html>