<?php
session_start();
$username = $_POST["username"];
$pass = $_POST["pass"];
echo $pass;
include 'database.php';
$sql = mysqli_query($conn,"SELECT * FROM user where username='$username'");
$row = mysqli_fetch_array($sql);
if((is_array($row))&&(password_verify($pass,$row['pass'])))
{
    $_SESSION["id"] = $row['id'];
    $_SESSION["username"] = $row['username'];
    $_SESSION["email"]=$row['email'];
    $_SESSION["fname"]=$row['fname'];
    $_SESSION["logged"]=true;
    header("Location: index.php"); 
}
else
{
    echo "Invalid Email ID/Password";
}
?>