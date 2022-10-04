
 
var valide = false;
var input = document.querySelectorAll('input');
for (let j = 0; j < input.length; j++) {
     
    input[j].addEventListener('keydown',function(){
        
      let next = input[j].nextElementSibling;
       
        if (input[j].value.length != 0) {
            input[j].classList.replace('is-invalid','is-valid');
            next.innerHTML ="valide!";
            next.classList.replace('invalid-feedback','valid-feedback');
            valide = true;
        } else{
            valide = false;
           
        }
    })
    // var result = input[j].value.includes('@');
    // if ( result == true){ is-valid valid-feedback}
}

var button = document.querySelectorA('button');

    button.addEventListener('click',function(e) {
        if(valide == false){
            alert("veuillez remplir les champs obligatoires!")
            e.preventDefault();
        }
    })
    

