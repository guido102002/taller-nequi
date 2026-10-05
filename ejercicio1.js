
const movimientos = [20000,345345,110000,35445,-10000,-500000];
let total = 0;
let cantidadRetiros = 0;

for(let i = 0; i< movimientos.length; i++){

 total = total+movimientos[i];

 if(movimientos[i]<0){
    cantidadRetiros = cantidadRetiros+1
 }

 console.log(total);
 console.log(cantidadRetiros)
}

