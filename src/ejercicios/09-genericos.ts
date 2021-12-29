/*
    ===== Código de TypeScript =====
*/
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('hola mundo');
let soyNumero = queTipoSoy(123);
let soyArray = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

let soyExplicito = queTipoSoy<number>( 100 );