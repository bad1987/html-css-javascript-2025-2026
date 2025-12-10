const colonnes = document.querySelectorAll('.container div');
if(colonnes && colonnes.length > 0) {
    for(let i = 0; i< colonnes.length; i++){
        colonnes[i].style.backgroundColor = 'red';
        colonnes[i].style.color = 'white';
    }
}
else{
    console.log('pas de colonne');
}