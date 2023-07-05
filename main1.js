const userEmailElement = document.querySelector("[name='email']")

document.getElementById("InputEmail").innerHTML = `${userEmailElement}`;

//  variabile mailing list
const mailingList = ["boolean0@gmail.com","boolean1@gmail.com","boolean2@gmail.com"];

const btnSubmit = document.querySelector(".btn-submit");

// variabile di default =false
let emailFound = false



btnSubmit.addEventListener ("click", function() {
    const userEmailElement = document.querySelector("[name='email']").value

    for (let i=0; i < mailingList.length; i++){
    
        const userEmailElement = mailingList[i]
        
        if ( userEmailElement === mailingList[i]){
            document.getElementById("registraion-mess").innerHTML = ( "sei già registrato e puoi effettuare l'accesso");
            emailFound = true
        }else if ( userEmailElement !== mailingList[i] && emailFound === false)
        document.getElementById("registraion-mess").innerHTML = ( "Ci dispiace, ma l'accesso è limitato agli utenti registrati.");
        emailFound = false


    }

})

// ----------------------- esercizio 2 -----------------

// numero random per l'utente 
var userRandomNumber =
 Math.floor(Math.random() * 6) + 1; 

document.getElementById("user-rand-num").innerHTML =  userRandomNumber;


 // numero random per il computer
var computerRandomNumber =
 Math.floor(Math.random() * 6) + 1; 

document.getElementById("com-rand-num").innerHTML = computerRandomNumber;


const btnStart = document.querySelector(".btn-start");



// controllare il vincitore 
btnStart.addEventListener ("click", function() {

    // var userRandomNumber =
    // Math.floor(Math.random() * 6) + 1; 

    // var computerRandomNumber =
    // Math.floor(Math.random() * 6) + 1; 
   

    if (userRandomNumber > computerRandomNumber ){
        document.getElementById("final.mess").innerHTML = ( "Il giocatore ha vinto ");
    
    }else if (userRandomNumber < computerRandomNumber){
        document.getElementById("final.mess").innerHTML = ( "Il computer ha vinto ");

    }else{
        document.getElementById("final.mess").innerHTML = ( " E UN PAREGGIO  ");
    }

    // per nasconder il numeri random
    document.getElementById("com-rand-num").classList.add("d-none")
    document.getElementById("user-rand-num").classList.add("d-none")

})



// come faccio a far apparire i numeri random soltanto quando clicco il pulsante 
