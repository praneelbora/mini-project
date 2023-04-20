<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    
    <!-- CSS -->
    <link rel="stylesheet" href="CSS/login.css">
</head>
<body>
    <?php
        if (session_status() === PHP_SESSION_ACTIVE) {
            header ("Location: index.php");
        } else {
            session_start();
        }
    ?>
    <span class="primary-box">
        <div class="form">
            <h2 style="text-align: center;">Log In</h2>
            <div class="form"></div>
                <div class = "inner">
                    <form method="post" action="signin.php">
                        <!-- USERNAME -->
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="username" name="username" placeholder="johnwick" required>
                        <label for="username">Username</label>
                    </div>

                    <!-- PASSWORD  -->
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="pass" name="pass" placeholder="Password" required>
                        <label for="pass">Password</label>
                    </div>

                    <!-- FORGOT PASSWORD  -->
                    <div style="width:100%; text-align: right;"><a class="new" href="Forgot.html">Forgot Password</a>
                    </div>

                    <!-- LOGIN BUTTON  -->
                    <div style="text-align: center;">
                        <!-- <input class="btn btn-primary mb-3" type="submit" value="Log In"> -->
                        <!-- <input class="btn btn-outline-dark mb-3" type="submit" value="Log In"> -->
                        <input class="btn btn-outline-success" type="submit" value="Log In" >
                        
                    </div>

                    <!-- SIGNUP BUTTON  -->
                    <div style="width: 100%; text-align: center;"><a class="new" href="Signup.php">New? Sign Up here</a>

                    </form>
                    
                </div>
            </div>  
        </div>
    </span>
 

        
    <span class="secondary-box">
        <img class="bg2" src="Assets/Bg_2.png" alt="IMG">
        <a href="index.html"><img class="logo"src="Assets/logo.png" alt="Logo"></a>
    </span>
    </div>
</body>
</html>