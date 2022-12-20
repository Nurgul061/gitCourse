<?php
// include('config.php');
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'anna');

$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
if ($link === false) {
    die("ERROR: Couldn't connect, " . mysqli_connect_error());
}
$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['pass'];
$sql = "insert into users (name,email,pass) values('$name','$email','$pass')";
$result = mysqli_query($link, $sql);
echo "Hello";
if ($result) {
    echo "Success!";
    exit();
} else{
    echo "ERRORRORORO!";
}

?>
