<?php
$db = mysqli_connect("localhost", "root", "", "my_bd")
    or die('Error connecting to MySQL server.');

$email = $_POST['emailDel'];

$query = "DELETE FROM people_one WHERE email = '$email'";
mysqli_query($db, $query)
    or die('Error querying database.');

echo 'Customer removed: ' . $email;

mysqli_close($db);
