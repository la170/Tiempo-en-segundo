const iniciar = document.getElementById('iniciar')
const cont = document.getElementById('cont')
const num = document.getElementById('num')
function regresiva(tiempo){
    if (isNaN(tiempo)){
        return alert('Ingrese un numero')
    }
    if (tiempo==0){
        cont.textContent='finish'
        return
    }
    else{
        cont.textContent=tiempo
        return setTimeout(regresiva,1000,tiempo-1)
        } 
}
    



