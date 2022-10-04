
var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom')
var inputEmail = document.getElementById('inputEmail');
var password = document.getElementById('password');
var confirmPw = document.getElementById('confirmPw');
var button = document.querySelector('button');

var NomValid = false;
var PrValid = false;
var EmailValid = false;
var passValid =false;
var confValid = false;


//inscription
// validation du nom
nom.addEventListener('keydown',function(){
     var next = nom.nextElementSibling;
    if (nom.value.length != 0) {
        nom.classList.replace('is-invalid','is-valid');
        next.innerHTML ="valide!";
        next.classList.replace('invalid-feedback','valid-feedback');
        NomValid = true;
    }
})

// validation du prénom
prenom.addEventListener('keydown',function(){
    var next = prenom.nextElementSibling;
    if (prenom.value.length != 0) {
        prenom.classList.replace('is-invalid','is-valid');
        next.innerHTML ="valide!";
        next.classList.replace('invalid-feedback','valid-feedback');
        PrValid = true;
    }
})
// validation d'adresse mail
inputEmail.addEventListener('keydown',function(){
   let next = inputEmail.nextElementSibling;
   let result = inputEmail.value.includes('@');
    if ((inputEmail.value.length != 0) && (result)) {
        inputEmail.classList.replace('is-invalid','is-valid');
        next.innerHTML ="valide!";
        next.classList.replace('invalid-feedback','valid-feedback');
        EmailValid = true;
    }
})

// validation du mot de passe
password.addEventListener('keydown',function(){
    var next = password.nextElementSibling;
    if (password.value.length != 0) {
        password.classList.replace('is-invalid','is-valid');
        next.innerHTML ="valide!";
        next.classList.replace('invalid-feedback','valid-feedback');
        passValid = true;
    }
})

// confirmation du mot de passe
confirmPw.addEventListener('keydown',function(){
    let next = confirmPw.nextElementSibling;
    if (password.value = confirmPw.value) {
        confirmPw.classList.replace('is-invalid','is-valid');
        next.innerHTML ="valide!";
        next.classList.replace('invalid-feedback','valid-feedback');
        confValid = true;
    }
})


    button.addEventListener('click',function register(e) {
        if((NomValid == false) || (PrValid == false) || (EmailValid == false) || (passValid == false) || (confValid == false)){
            alert("veuillez remplir les champs obligatoires!")
            e.preventDefault();
        }
    })
    

