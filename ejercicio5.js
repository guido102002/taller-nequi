
const usuarios = [
  { nombre: 'Ana',    movimientos: [20000, 15000, 5000, 8000] },
  { nombre: 'Carlos', movimientos: [50000, 12000, 30000] },
  { nombre: 'Laura',  movimientos: [7000, 9000, 4000, 1000, 15000] }
];

for (let i = 0; i < usuarios.length; i++) {

  let totalUsuario = 0;

  for (let j = 0; j < usuarios[i].movimientos.length; j++) {
    totalUsuario = totalUsuario + usuarios[i].movimientos[j];
  }

  
  console.log(usuarios[i].nombre + ' gastó en total: $' + totalUsuario);
}