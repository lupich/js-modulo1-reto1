
function autos(modelo, ano,placa){
    this.modelo=modelo;
    this.ano=ano;
    this.placa=placa;
}

const matrizAutos=[]
crearAutos(20)
function crearAutos(cantidad){
    for (let i = 1; i <=cantidad; i++) {
        matrizAutos[i-1]=new autos(`A${i}BX${i-1}`,anoAleatorio(),placa());
    }
    console.log(matrizAutos)
}

function anoAleatorio(){
    return Math.floor(Math.random()*(2010- 1999)) + 1990;
    
}
placa()
function placa(){
    const centena=Math.floor(Math.random()*(999 - 100)) + 100;
    const letras= `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numeroExtraer=Math.floor(Math.random()*((letras.length)-1)) + 1;
    const unidad=Math.floor(Math.random()*(10 - 1)) + 1;
    const extraerLetra=letras.slice(numeroExtraer,numeroExtraer+1);
   const placaAuto=extraerLetra+unidad+extraerLetra+centena;

    return placaAuto;
}