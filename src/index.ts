/*
    ===== Código de TypeScript =====
*/

let frutas = ['peras', 'manzanas', 'mangos'];
frutas.push('otra pera', 'banana');

interface Coche{
    marca: string;
    potencia: number;
    puertas: number;
    modelo?: string;
}

const coche: Coche = {
    marca: 'volvaguen',
    potencia: 200,
    puertas: 5
}

coche.modelo = 'golf';

console.table(coche);