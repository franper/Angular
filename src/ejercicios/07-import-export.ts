import { calculaISV, Producto } from "./06-desestructuracion-funcion";

/*
    ===== Código de TypeScript =====
*/
const carritoCompras: Producto[] = [
    {
        description: 'Telefono 1',
        precio: 100
    },
    {
        description: 'Telefono 2',
        precio: 150
    },
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);