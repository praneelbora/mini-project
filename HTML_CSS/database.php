<?php
    $url='localhost';
    $rootusername='root';
    $password='';
    $conn=mysqli_connect($url,$rootusername,$password,"form_data");
    if(!$conn){
        die('Could not Connect My Sql:' .mysql_error());
    }
?>