<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="CSS/signup.css">
</head>
<body>
    <div class="primary-box">
        <div class="form">
            <h2>Sign Up</h2>
            <br>
            <form method="post" action="register.php"> 
                <!-- FULL NAME -->
                <div class="form-floating mb-3">
                    <input type="name" class="form-control" id="fname" name="fname" required>
                    <label for="name">Full Name</label>
                </div>
                <!-- PHONE NUMBER  -->
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="username" name="username" required>
                    <label for="username">Username</label>
                </div>
                <!-- EMAIL ID -->
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" name="email" required>
                    <label for="email">Email address</label>
                </div>
                <!-- PASSWORD  -->
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="pass" name="pass" required>
                    <label for="pass">Password</label>
                </div>
                <!-- CONFIRM PASSWORD -->
                <!-- <div class="form-floating mb-3">
                    <input type="confirmpassword" class="form-control" id="confirmpass" placeholder="Password" required>
                    <label for="confirmpass">Confirm Password</label>
                </div> -->
                <!-- DOB  -->
                <!-- <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="bdate" placeholder="date"  required>
                    <label for="bdate">Date of Birth</label>
                </div> -->
                <!-- GENDER  -->
                <!-- <div class="form-floating mb-4">
                    <select class="form-select" id="gender" aria-label="Floating label select example"  >
                        <option selected>Please select your gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>
                    <label for="gender">Gender</label>
                </div> -->
                
                <!-- SIGN UP -->
                
                        <div style="text-align: center;">          
                            <input class="btn btn-primary mb-1" type="submit" value="Sign Up">
                        </div>
                
                <a class="old" href="Login.php">Have an account? Sign In here</a>
                <!-- <p class="old"></p> -->
        
            </form>

        </div>
    </div>
    <div class="secondary-box">
        <img class="bg2" src="Assets/Bg_2.png" alt="IMG">
        <a href="index.html"><img class="logo"src="Assets/logo.png" alt="Logo"></a>
    </div>
</body>
</html>