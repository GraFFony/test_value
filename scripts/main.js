//валидация формы
const validate_log = (el) => /^[a-zA-z_\d]{3}/.test(el);
const validate_mail = (el) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(el);

//нужно для регистриции
let reg_login = '';
let reg_password = '';
let reg_about = '';
let reg_photo = '';
let reg_mail = '';

//меню регистриции
function regmenu() {
    $('.enter-first').style.opacity = '0';
    change_prof(); //из анимаций
    setTimeout(() => {
        $('.enter-first').style.display = 'none';
        $('.register-first').style.display = 'block';
        setTimeout(() => {
            $('.register-first').style.opacity = '1';
        }, 10);
    }, 801);
}

//меню входа
function entermenu() {
    $('.register-first').style.opacity = '0';
    change_prof(); //из анимаций
    setTimeout(() => {
        $('.register-first').style.display = 'none';
        $('.enter-first').style.display = 'block';
        setTimeout(() => {
            $('.enter-first').style.opacity = '1';
        }, 10);
    }, 801);
}
//регистрация
function register(x) {
    if (x === 1) {
        reg_login = document.forms['reg_form_first']['login'].value;
        reg_password = document.forms['reg_form_first']['password'].value;
        if (!validate_log(reg_login)) {
                if (lang === 'ru')
                    alertt('Ошибка', 'Введите логин, логин должен быть не короче 3 символов и может включать в себя только латинские символы, цифры и знак подчёркивания.', 3.5);
                if (lang === 'eng')
                    alertt( 'Error', 'Enter your username, the username must be at least 3 characters long and can only include Latin characters, numbers, and an underscore.', 3.5);
            return null;
        }
        if (reg_password.length < 4) {
            if (lang === 'ru')
                alertt('Ошибка', 'Введите пароль, пароль должен быть не короче 4 символов', 2.5);
            if (lang === 'eng')
                alertt( 'Error', 'Enter a password, the password must be at least 4 characters long', 2.5);
            return null;
        }
        $('.register-first').style.opacity = '0';
        change_prof_second(); //из анимаций
        setTimeout(() => {
            $('.register-first').style.display = 'none';
            $('.register-second').style.display = 'block';
            setTimeout(() => {
                $('.register-second').style.opacity = '1';
            }, 10);
        }, 801);
    }else if (x === 2){
        reg_mail = $('#email').value;
        reg_photo = $('#photo').files[0];
        reg_about = $('#about').value;
        if (!validate_mail(reg_mail)){
            if (lang === 'ru')
                alertt('Ошибка', 'Введите почту, Почта должна быть валидной', 2);
            if (lang === 'eng')
                alertt( 'Error', 'Enter the mail, the Mail must be valid', 2);
            return null;
        }
        if (!(reg_photo.type === "image/jpeg" || reg_photo.type === "image/gif" || reg_photo.type === "image/png")){
            if (lang === 'ru')
                alertt('Ошибка', 'Вы должны загрузить картинку', 2);
            if (lang === 'eng')
                alertt( 'Error', 'You must upload a picture', 2);

            return null;
        }
        if (!(reg_about.length > 5)){
            if (lang === 'ru')
                alertt('Ошибка', 'Вы должны написать что-то о себе', 2);
            if (lang === 'eng')
                alertt( 'Error', 'You should write something about yourself', 2);

            return null;
        }
        finish();
        $('.register-second').style.opacity = '0';
        change_prof(); //из анимаций
        setTimeout(() => {
            $('.register-second').style.display = 'none';
            $('.enter-first').style.display = 'block';
            setTimeout(() => {
                $('.enter-first').style.opacity = '1';
            }, 10);
        }, 801);
    }
}
async function finish() {
    let data = new FormData;
    data.append('logine',  reg_login);
    data.append('password', reg_password);
    data.append('about', reg_about);
    data.append('maile', reg_mail);
    console.log(reg_photo);
    data.append('photo', reg_photo);
    let res = await fetch( '../php/register.php', {
        method:'post',
        body:data,
    }).then(res => res.json());
    if (await res.error){
        if (lang === 'ru')
            alertt('Ошибка', 'Данный логин занят, приносим свои извинения', 2);
        if (lang === 'eng')
            alertt( 'Error', 'Sorry, but this login is already used', 2);
    }
}
 async  function enter() {
    let data = new  FormData;
    data.append('login', $('#login_enter').value);
    data.append('password', $('#password_enter').value);
    let res = await fetch( '../php/login.php', {
        method:'post',
        body:data,
    }).then(res => res.json());
     if (await res.error){
         if (lang === 'ru')
             alertt('Ошибка', 'Неверный логин и / или пароль', 2);
         if (lang === 'eng')
             alertt( 'Error', 'Invalid username and / or password', 2);
     }
     if (await res.login){
         let ent_login = await  res.login;
         let ent_about = await res.about;
         let ent_photo = await res.photo;
         $('.enter-first').style.opacity = '0';
         $('#log').innerHTML = ent_login;
         $('#aboutt').innerHTML = ent_about;
         $('#photos').innerHTML = `<img width="200px" height="200px" src="${ent_photo}">`;
         change_prof_second(); //из анимаций
         setTimeout(() => {
             $('.enter-first').style.display = 'none';
             $('.enter-second').style.display = 'block';
             setTimeout(() => {
                 $('.enter-second').style.opacity = '1';
             }, 10);
         }, 801);

     }
 //   change_prof(); //из анимаций
}