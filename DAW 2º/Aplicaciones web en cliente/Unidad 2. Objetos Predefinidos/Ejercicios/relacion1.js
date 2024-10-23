var contar = 60;

function contador(){
    if(contar >= 0){
        console.log(contar);
        contar--;
        setTimeout(contador, 1000);
    } 
}

contador();

