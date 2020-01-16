<?php
$PDO = new PDO('mysql:host=localhost;dbname=fortest;', 'root', '');
if (isset($_POST)) {

    $login = $_POST['logine'];
    $password = md5($_POST['password']);
    $email = $_POST['maile'];
    $about = $_POST['about'];
    $login = clean($login);
    if(!preg_match("/^[a-zA-z_\d]{3}/", $login) || empty($login)) {
        echo json_encode('false');
        return null;
    }
    if(!preg_match("/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/", $email) || empty($email)) {
        echo json_encode('false');
        return null;
    }
    if ($res = $PDO->query("SELECT `id` FROM `users` WHERE (`login` = '".$login."')")->fetchAll()[0]['id']){
        echo json_encode(['error' => 'bad login']);
        return null;
    }
    $about = clean($about);
    $uploads_dir = __DIR__ . '/uploads/';
    $tmp_name = $_FILES["photo"]["tmp_name"];
    $name = $login;
    move_uploaded_file($tmp_name, $uploads_dir.$name.'.png');

    $photourl = 'http://test/php/uploads/'.$login.'.png';

    $res = $PDO->query("INSERT INTO `users`(`login`, `password`, `photo`, `email`) VALUES ('".$login."','".$password."','".$photourl."','".$email."')");
    $five = $PDO->query("SELECT `id` FROM `users` WHERE (`photo` = '".$photourl."')")->fetchAll()[0][0];
    $res = $PDO->query("INSERT INTO `about`(`user_id`, `about`) VALUES ('".$five."','".$about."')");
    echo json_encode('true');

}
function clean($v){
    $v = trim($v);
    $v = stripslashes($v);
    $v = strip_tags($v);
    $v = htmlspecialchars($v);
    return $v;
}