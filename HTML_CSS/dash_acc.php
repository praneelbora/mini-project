<?php
        session_start();
        if (isset($_SESSION['logged'])) {
            include 'database.php';
            $id = $_SESSION["id"];
            $sql = mysqli_query($conn,"SELECT * FROM user where id='$id'");
            $row  = mysqli_fetch_array($sql);
        } else {
            header ('Location: Login.php');
        }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/dash_acc.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <img style="border-radius: 100%;" src="Assets/Profile.png" alt="Profile Image">
    <div class="main1"> 
        <?php if(!isset($_SESSION['file'])){ echo '<img class="profile" style="border-radius: 100%;" src="Assets/Profile.png" alt="Profile">'; }
        else { echo '<img class="profile" style="border-radius: 100%;" src="'.$_SESSION['file'].'" alt="Profile">'; } ?>
        <h2 style="text-align: center;"><?php echo $_SESSION['fname'] ?></h2>
        <h3 style="text-align: center; margin-top: 8px;">@<?php echo $_SESSION['username'] ?></h3>
        <form class="imgform" method="post" action="imgupload.php">
            <label for="file" class="form-label">Change your profile Pic:</label>
            <input class="form-control" type="file" id="file" name='file'><br>
            <input class="btn btn-outline-success" type='submit' value='Submit'>  
        </form>
        <!-- <h3 style="text-align: center;">johnwick@chapter4.com</h3> -->
        <!-- <p style="text-align: center; margin-top: 10px; margin-bottom: 8px;">Average rating 4.0/5.0</p> -->
        <hr style="margin: 0 3vw; ">
        <!-- <p style="text-align: center; margin-top: 18px; ">Date Joined: 09/03/2004</p> -->
        <!-- <p style="text-align: center; margin-top: 8px;">Number of Reviews: XXX</p> -->

    </div>
</body>
</html>