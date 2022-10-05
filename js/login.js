var mail = document.getElementById('mail');
var pw = document.getElementById('pw');
var button = document.querySelector('button');


var mailValid = false;
var pwValid = false;


// validation adress mail
mail.addEventListener('keydown',function(){
    let result = mail.value.includes('@')
    let next = mail.nextElementSibling;
    if ((mail.value.length != 0) &&(result)) {
        mail.classList.replace('is-invalid','is-valid');
        next.innerHTML ="valide!";
        next.classList.replace('invalid-feedback','valid-feedback');
        mailValid = true;
    } 
    
})

// validation pw
pw.addEventListener('keydown',function(){
   let next = pw.nextElementSibling;
    if (pw.value.length != 0) {
        pw.classList.replace('is-invalid','is-valid');
        next.innerHTML ="valide!";
        next.classList.replace('invalid-feedback','valid-feedback');
        pwValid = true;
    } 
})


    button.addEventListener('click',function login(e) {
        
        if((mailValid == false) || (pwValid == false)){
            alert("veuillez remplir les champs obligatoires!")
            e.preventDefault();
        }
    })
    

 if (localStorage.getItem('')) {
    window.open('dashborad.html')
 }