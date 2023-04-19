<?php
$fname = $_POST["fname"];
$username = $_POST["username"];
$email = $_POST["email"];
$pass = password_hash($_POST["pass"], PASSWORD_DEFAULT);
echo $name.' and '.$username;
include("database.php");
$sql1=mysqli_query($conn,"SELECT * FROM user where email='$email'");
$sql2=mysqli_query($conn,"SELECT * FROM user where username='$username'");
if(mysqli_num_rows($sql1)>0){
    echo "Email Id Already Exists"; 
	exit;
} else if(mysqli_num_rows($sql2)>0){
    echo "Username taken!"; 
	exit;
} else {
    $query = "INSERT INTO user(username, email, fname, pass) VALUES ('$username', '$email', '$fname', '$pass')";
    $sql=mysqli_query($conn,$query) or die("Could not sign up!");
    header ("Location: Login.php");
}
?>