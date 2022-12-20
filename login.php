<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'anna');


$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

$email = $_POST['email'];
$pass = $_POST['pass'];
if ($link->connect_errno)
    echo $link->connect_error;
$sql = "select * from users where name = '$email' and pass = '$pass'";
$result = $link->query($sql);
/* if ($result) {
    echo "Success!";
    exit();
} else
    echo mysqli_error($link); */

if ($result->num_rows > 0) {
    echo 'true';
    exit();
} else
    echo 'false';

?>