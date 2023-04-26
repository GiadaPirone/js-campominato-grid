//prendiamo dall'html la griglia.
let grid = document.getElementById("griglia");

// al click del bottone, dobbiamo generare la gliglia con i 100 quadratini.
let btn = document.getElementById("bottone");




//al ckcik del bottone creo un nuovo div (quadratino)
btn.addEventListener("click", function(){
    
    //ciclo per creare 100 div
    for (let i = 0; i < 100; i++) {
        
        // creazione div appeso alla variabile 
        let nuovoDiv = document.createElement("div");

        // inserire questa variabile all'interno del dom con la clesse
        document.getElementById("griglia").appendChild(nuovoDiv).className = "quadratino";
    }
    
})


