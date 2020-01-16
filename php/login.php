<?php
$PDO = new PDO('mysql:host=localhost;dbname=fortest;', 'root', '');
if (isset($_POST)) {
    $login = $_POST['login'];
    $test = 'test';
    $password = md5($_POST['password']);
    if ($id = $PDO->query("SELECT `id` FROM `users` WHERE (`login` = '" . $login . "' AND `password` = '" . $password . "' )")->fetchAll()[0]['id']) {

        if ($about = $PDO->query("SELECT  `about_txt` FROM `about` WHERE  (`user_id` = '".$id."')")->fetchAll()[0][0] && $photo = $PDO->query("SELECT  `photo` FROM `users` WHERE  (`id` = " . $id . ")")->fetchAll()[0]['photo']) {
            $about = $PDO->query("SELECT  `about_txt` FROM `about` WHERE  (`user_id` = '".$id."')")->fetchAll();
            echo json_encode(['login' => $login, 'about' => $about[0][0], 'photo' => $photo]);
            return null;
        }
    }
    echo json_encode(['error' => 'incorect']);

}