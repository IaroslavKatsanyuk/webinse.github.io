<?php
$connection = mysqli_connect('localhost', 'root', '', 'my_bd');

if ($connection == false) {
    echo "Error!";
    echo mysqli_connect_errno();
    exit();
}

$query = mysqli_query($connection, "SELECT * FROM `people_one` ");

while ($article = mysqli_fetch_assoc($query)) {
    echo $article['email'] . " ";
}
