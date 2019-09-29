<?php
$mysqli = new mysqli("localhost", "root", "", "my_bd");
$mysqli->query("SET NAMES 'utf8'");
$fname = trim($_POST['fname']);
$lname = trim($_POST['lname']);
$email = trim($_POST['email']);


$mysqli->query("INSERT INTO `people_one` (`fname`, `lname`, `email`) VALUES ('$fname', '$lname', '$email')");


$mysqli->close();
