const userEmailElement = document.querySelector("[name='email']")

document.getElementById("InputEmail").innerHTML = `${userEmailElement}`;

//  variabile mailing list
const mailingList = ["boolean0@gmail.com","boolean1@gmail.com","boolean2@gmail.com"];

const btnSubmit = document.querySelector(".btn-submit");

// variabile di default =false
let emailFound = false



btnSubmit.addEventListener ("click", function() {

    for (let i=0; i < mailingList.length; i++){
    
        const userEmailElement = mailingList[i]
        
        if ( userEmailElement === mailingList){
            document.getElementById("registraion-mess").innerHTML = ( "sei già registrato e puoi effettuare l'accesso");
            emailFound = true
        }else if ( userEmailElement !== mailingList[i] && emailFound === false)
        document.getElementById("registraion-mess").innerHTML = ( "Ci dispiace, ma l'accesso è limitato agli utenti registrati.");


    }

})

