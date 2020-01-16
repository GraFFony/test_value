const $ = (el) => document.querySelector(el);

let lang = 'ru';
function onLoadFunc() {
    $('.main-form').style.opacity = '1';
}
//анимация перехода
function change_prof() {
    $('.main-form').style.transition = '0.5s';
    $('.main-form').style.left = '55%';
    setTimeout(()=>{
        $('.main-form').style.width = '30%';
        $('.main-form').style.left = '35%';
    }, 510)
}
//анимация перехода с увеличением
function change_prof_second() {
    $('.main-form').style.transition = '0.5s';
    $('.main-form').style.left = '55%';
    setTimeout(()=>{
        $('.main-form').style.width = '50%';
        $('.main-form').style.left = '25%';
    }, 510)
}
//смена языка (прошу не бейте)
function langchange() {
    if (lang === 'ru'){
        lang = 'eng';
        $('.language').classList.remove('rus');
        $('.language').classList.add('eng');

        $('.register-first').innerHTML =
            '<form name="reg_form_first">\n' +
            '<div><h1>Registration</h1></div>\n' +
            '<input type="text" id="login" name="login" required>\n' +
            '<label for="login" style="left:-70px;">Login</label>\n' +
            '<input type="password" id="password" name="pass" required>\n' +
            '<label for="password" style="left:-50px;">Password</label>\n' +
            '<input type="button" onclick="register(1)" value="Register">\n' +
            '<input type="button" onclick="entermenu()" value="Log in">\n' +
            '</form>';

        $('.register-second').innerHTML = '<div class="blop-block"><h1>Registration</h1></div>\n' +
            '<form class="form_second" name="reg_form_second">\n' +
            '<input type="email" id="email" name="login"  required>\n' +
            '<label for="email">Email</label>\n' +
            '<input type="file" id="photo">\n' +
            '<label for="photo">Photo</label>\n' +
            '</form>\n' +
            '<form class="form_about form_second" name="reg_form_second">\n' +
            '<textarea id="about"></textarea>\n' +
            '<label for="about" style="left: -50px;">About you</label>\n' +
            '</form>\n' +
            '<div class="blop-blop"><input type="button" onclick="register(2)" value="Finish Register"></div>\n';

        $('.enter-first').innerHTML = '<form>\n' +
            '<div><h1>Log in</h1></div>\n' +
            '<input type="text" id="login_enter">\n' +
            '<label for="login_enter" style="left:-70px;">Login</label>\n' +
            '<input type="password" id="password_enter">\n' +
            '<label for="password_enter" style="left:-50px;">Password</label>\n' +
            '<input type="button" onclick="enter()" value="Enter">\n' +
            '<input type="button" onclick="regmenu()" value="Registration">\n' +
            '</form>';
    }else if (lang === 'eng') {
        lang = 'ru';
        $('.language').classList.remove('eng');
        $('.language').classList.add('rus');

        $('.register-first').innerHTML =
            '<form name="reg_form_first">\n' +
            '<div><h1>Регистрация</h1></div>\n' +
            '<input type="text" id="login" name="login" required>\n' +
            '<label for="login">Логин</label>\n' +
            '<input type="password" id="password" name="pass" required>\n' +
            '<label for="password">Пароль</label>\n' +
            '<input type="button" onclick="register(1)" value="Регистрация">\n' +
            '<input type="button" onclick="entermenu()" value="Войти">\n' +
            '</form>';

        $('.register-second').innerHTML = '<div class="blop-block"><h1>Регистрация</h1></div>\n' +
            '<form class="form_second" name="reg_form_second">\n' +
            '<input type="email" id="email" name="login"  required>\n' +
            '<label for="email">Почта</label>\n' +
            '<input type="file" id="photo">\n' +
            '<label for="photo">Фото</label>\n' +
            '</form>\n' +
            '<form class="form_about form_second" name="reg_form_second">\n' +
            '<textarea id="about"></textarea>\n' +
            '<label for="about">О себе</label>\n' +
            '</form>\n' +
            '<div class="blop-blop"><input type="button" onclick="register(2)" value="Зарегистрироваться"></div>';

        $('.enter-first').innerHTML = '<form>\n' +
            '<div><h1>Вход</h1></div>\n' +
            '<input type="text" id="login_enter">\n' +
            '<label for="login_enter">Логин</label>\n' +
            '<input type="password" id="password_enter">\n' +
            '<label for="password_enter">Пароль</label>\n' +
            '<input type="button" onclick="enter()" value="Войти">\n' +
            '<input type="button" onclick="regmenu()" value="Зарегистрироваться">\n' +
            '</form>';
    }
}
function alertt(x, y, z) {
    $('.block-alert').style.display = 'flex';
    $('.info-error').innerText = x;
    $('.main-info-error').innerText = y;
    setTimeout(()=>{
        $('.block-alert').style.opacity = '1';
        setTimeout(()=> {
            $('.block-alert').style.opacity = '0';
            setTimeout(()=>{
                $('.block-alert').style.display = 'none';
            },510);
        }, z*1000);
    }, 10);
}