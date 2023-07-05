//  variabile mailing list
const mailingList = ["amaniesseili@hotmail.com","ama-esseili@gmail.com","hassanleila@hotmail.com","nayaleila2022@gmail.com"];

// variabile di default =false
let emailFound = false

// cercare dentro l'array mailinglist
for (let i=0; i < mailingList.length; i++){
    
    const userEmail = mailingList[i]
    
    if ( userEmail === mailingList){
        console.log( "sei già registrato e puoi effettuare l'accesso");
        emailFound = true
    }

}