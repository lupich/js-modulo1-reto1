jugarPPTS()
function jugarPPT2(eleccionPersona){
    eleccionPersona=prompt(`Ingresa piedra, papel o tijera para comenzar a jugar`);
    const opcionesPC=[`piedra`,`papel`,`tijera`];
    let indixRandom=Math.floor(Math.random() * (3 - 0)) - 0;
    let eleccionPC=opcionesPC[indixRandom];
    let tu=eleccionPersona.toLowerCase();
   if(tu===`piedra`||tu===`papel`||tu===`tijera`){
    
      /*   if(tu===eleccionPC){
            alert(`Empate , los dos sacaron ${eleccionPC}`);
        
        }else if((tu===`papel`&&eleccionPC===`tijera`)||(tu===`tijera`&&eleccionPC===`piedra`)||(tu===`piedra`&&eleccionPC===`papel`)){
            alert(`Tú eligiste ${tu} la computadora eligío ${eleccionPC}. El ganador es la pc
            `);
        }else if((tu===`tijera`&&eleccionPC===`papel`)||(tu===`piedra`&&eleccionPC===`tijera`)||(tu===`papel`&&eleccionPC===`piedra`)){
            alert(`Tú eligiste ${tu} la computadora eligío ${eleccionPC}. Tú eres el ganador"
            `);
        } */
        
   }else{
       alert(`el valor ingraso no pertenece a  las opciones del juego piedra , papel o tijera`)
   }
    

    
}