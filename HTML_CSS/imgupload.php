<?php
session_start();
$file = strtolower($_FILES['file']['name'].'-'.rand(1000,10000));
$file_loc = $_FILES['file']['tmp_name'];
$folder="upload/";
$final_file=str_replace(' ','-',$file);
if(move_uploaded_file($file_loc,$folder.$final_file)){
    $query="UPDATE user SET file='$final_file' where id='$_SESSION['id']";
    $sql=mysqli_query($conn,$query)or die("Could not upload file!");
    $_SESSION['file']=$final_file;
    header ("Location: dash_acc.php");
}

?>