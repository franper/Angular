/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 10,
    segundo: 20,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//desestructuracion de objetos {}
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

//console.log('El volumen actual de: ', volumen );
//console.log('El segundo actual de: ', segundo );
//console.log('La cancion actual de: ', cancion);
//console.log('El autor es: ', autor);

//desestructuracion de arrays []
const dbz: string[] = ['Goku', 'Vergueta', 'Trunks'];
const [, , p3] = dbz;

//console.log('Personaje 1: ', p1);
//console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);