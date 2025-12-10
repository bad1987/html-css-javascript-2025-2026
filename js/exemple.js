const button = document.getElementById("calculer");
const premierNombre = document.getElementById("premierNombre");
const deuxiemeNombre = document.getElementById("deuxiemeNombre");
const resultat = document.getElementById("resultat");

if(button){
    button.addEventListener('click', function(e){
        const val1 = premierNombre.value;
        const val2 = deuxiemeNombre.value;
        if(val1 && val2){
            const sum = parseInt(val1) + parseInt(val2);
            const messsage = "La somme de " + val1 + " et " + val2 + " est " + sum;
            
            resultat.innerHTML = messsage;
            resultat.style.color = "green";
        }
        else{
            resultat.innerHTML = "Veuillez entrer des nombres valides";
            resultat.style.color = "red";
        }
    })
}