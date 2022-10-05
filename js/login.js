function login(e) {
    e.preventDefault();
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');

    if ((email.value =="") ||(!email.value.includes('@'))) {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
       

    } else{
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }
    if (pw.value =="") {
        pw.classList.remove('is-valid')
        pw.classList.add('is-invalid')
        
    }else{
        pw.classList.remove('is-invalid')
        pw.classList.add('is-valid')
    }

var users = JSON.parse(localStorage.getItem('users')) || []
 
var userFound = users.find((user)=> user.email === email.value && user.password === pw.value)
console.log(userFound);
if (userFound == undefined) {
   alert('verify your email or password')
}else{
    
    window.location.href = 'dashboard.html'
}
}

var button = document.querySelector('button');
button.addEventListener('click',login)

