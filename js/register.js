function register(e) {
    e.preventDefault();
    var nom = document.getElementById('nom');
    var prenom = document.getElementById('prenom')
    var inputEmail = document.getElementById('inputEmail');
    var password = document.getElementById('password');
    var confirmPw = document.getElementById('confirmPw');
    var formValid = true

    if (nom.value =="") {
        nom.classList.remove('is-valid')
        nom.classList.add('is-invalid')
        formValid = false
    }else{
        nom.classList.remove('is-invalid')
        nom.classList.add('is-valid')
    }
    if (prenom.value =="") {
        prenom.classList.remove('is-valid')
        prenom.classList.add('is-invalid')
        formValid = false
    }else{
        prenom.classList.remove('is-invalid')
        prenom.classList.add('is-valid')
    }
    if ((inputEmail.value =="")) {
        inputEmail.classList.remove('is-valid')
        inputEmail.classList.add('is-invalid')
        formValid = false
    }else{
        inputEmail.classList.remove('is-invalid')
        inputEmail.classList.add('is-valid')
    }
    if (password.value =="") {
        password.classList.remove('is-valid')
        password.classList.add('is-invalid')
        formValid = false
    }else{
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
    }
    if ((confirmPw.value =="") || (confirmPw.value != password.value)) {
        confirmPw.classList.remove('is-valid')
        confirmPw.classList.add('is-invalid')
        formValid = false
    }else{
        confirmPw.classList.remove('is-invalid')
        confirmPw.classList.add('is-valid')
    }

    var data = {
        name: nom.value,
        last :prenom.value,
        email : inputEmail.value,
        password : password.value
    }
   
    if (formValid) {
        var users = JSON.parse(localStorage.getItem('users')) || []
        users.push(data)
        localStorage.setItem('users',JSON.stringify(users))
        window.location.href = 'login.html'
    }
}

var button = document.querySelector('button');
button.addEventListener('click', register)