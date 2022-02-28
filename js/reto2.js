jugarPPT()
function jugarPPT(eleccionPersona){
    eleccionPersona=prompt(`Ingresa piedra, papel o tijera para comenzar a jugar`);
    const opcionesPC=[`piedra`,`papel`,`tijera`];
    let indixRandom=Math.floor(Math.random() * (3 - 0)) - 0;
    let eleccionPC=opcionesPC[indixRandom];
    let tu=eleccionPersona.toLowerCase();
   
        switch (tu) {
            case `piedra`:
                if(tu==="piedra"&&eleccionPC==="tijera"){
                    alert(`Tú eligiste ${tu} la computadora eligío ${eleccionPC}. Tú eres el ganador
                `);
                }else if(tu==="piedra"&&eleccionPC==="papel"){
                    
                    alert(`Tú eligiste ${tu} la computadora eligío ${eleccionPC}. El ganador es la pc
                    `);
                }else{
                    alert(`Empate , los dos sacaron ${eleccionPC}`);
                }
                break;
            case `tijera`:
                if(tu==="tijera"&&eleccionPC==="papel"){
                    
                    alert(`Tú eligiste ${tu} la computadora eligío ${eleccionPC}. Tú eres el ganador
                    `); 
                }else if(tu==="tijera"&&eleccionPC==="piedra"){
                    alert(`Tú eligiste ${tu} la computadora eligío ${eleccionPC}. El ganador es la pc
                `);
                }else{
                    alert(`Empate , los dos sacaron ${eleccionPC}`);
                }
                break;
            case `papel`:
                if (tu==="papel"&&eleccionPC==="piedra") {
                    alert(`Tú eligiste ${tu} la computadora eligío ${eleccionPC}. Tú eres el ganador
                `);
                } else if (tu==="papel"&&eleccionPC==="tijera"){
                    alert(`Tú eligiste ${tu} la computadora eligío ${eleccionPC}. El ganador es la pc
                `);
                }else{
                    alert(`Empate , los dos sacaron ${eleccionPC}`);
                }
            break;
            default:
                alert(`el valor ingraso no pertenece a  las opciones del juego piedra , papel o tijera`)
                break;
                
        }
   
    

    
}