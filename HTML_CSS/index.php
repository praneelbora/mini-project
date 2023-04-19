<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/styles.css">
    <title>Document</title>
</head>
<body>
    <?php
        if (isset($_SESSION['logged'])) {
            include 'database.php';
            $id = $_SESSION["id"];
            $sql = mysqli_query($conn,"SELECT * FROM user where id='$id'");
            $row  = mysqli_fetch_array($sql);
        }
    ?>
    <!-- NAVBAR  -->
    <nav class="navbar" id="navbar">
        <img class="logo"src="Assets/logo.png" alt="Logo">
        <ul style="list-style-type: none;" >
            <li class="nav1 nav2" style="color: white; "><a href="#browse" style="color: inherit; font-style: normal; text-decoration: none;">Browse</a></li>
            <li class="nav1 nav2" style="color: white; ">About Us</li>
            <li class="nav1 nav2" style="color: white; ">Contact</li>
            <?php
            if (!isset($_SESSION['logged'])) { echo '<li class="nav1" ><span><a href="Login.php" class="nav3">Log In</a></span> | <span class="nav3"><a href="Signup.php" class="nav3">Sign Up</a></span></li>'; }
            else { echo '<li class="nav1"><span><a href="dash_acc.php" class="nav3">Hi '.$_SESSION['username'].'</a></span> | <span class="nav3"><a href="logout.php" class="nav3">Sign Out</a></span></li>'; }?>
            <!-- <li class="nav1" ><span><a href="Login.html" class="nav3">Log In</a></span> | <span class="nav3"><a href="SignUp.html" class="nav3">Sign Up</a></span> </li> -->
        </ul>
    </nav>
    <!-- HERO SECTION  -->
    <section class="hero">
        <div class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore adipisci ullam sequi aperiam perferendis quas, quaerat aspernatur architecto, molestias numquam cum perspiciatis esse excepturi vitae aliquid odio doloribus nihil.</div>
        <img class="el1" src="Assets/Ellipse 1.png" alt="Ellipse1">
        <img class="el2" src="Assets/Ellipse 2.png" alt="Ellipse2">
        <img class="el3" src="Assets/Ellipse 3.png" alt="Ellipse3">
    </section>
    <!-- SEARCH SECTION  -->
    <section class="search" id="browse">
        <input class="searchbar" type="text" placeholder="Hotels, Places, Ratings, etc">
    </section>

    <!-- <section class="contact">
        <h1 style="margin-left: 0;">Contact Us</h1>
        <p style="padding-top: 1%;">abc@gmail.com</p>
        <p style="padding-top: 1%;">1234567890</p>
        <p style="padding-top: 1%;">B203, Bhaskaracharya building,</p>
        <p>K J Somaiya College of Engineering,</p>
        <p>Somaiya Vidyaviahar University,</p>
        <p>Vidyavihar East, Mumbai</p>
        <p>Maharashtra - 400077.</p>
    </section> -->

    <script>
        var nav = document.getElementById('navbar');
        window.onscroll = function () {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
                nav.classList.add('navbarbg');
            } else {
                nav.classList.remove('navbarbg');
            }
        }
        // TRYING AUTOMATIC SCROLL 
        // function pageScroll() {
        // window.scrollBy(0,1);
        // scrolldelay = setTimeout(pageScroll,10);
        // }
    </script>

</body>