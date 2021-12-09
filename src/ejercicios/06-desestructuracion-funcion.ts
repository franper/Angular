/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    description : string;
    precio : number;
}

const telefono : Producto = {
    description : 'Nokia 360',
    precio : 150
}

const tableta : Producto = {
    description : 'Ipad Pro',
    precio : 499
}

export function calculaISV(productos : Producto[]):[number, number] {
    let total = 0;
    /* sin desestructuracion
    productos.forEach( ( producto ) => {
        total += producto.precio;
    });
    */
    productos.forEach( ({ precio }) => {
        total += precio;
    });

    return [total, total * 0.15];
}

const articulos = [ telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('Total:', total);
console.log('el ISV:', isv);