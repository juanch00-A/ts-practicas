//Enums
var ERROR_TYPES;
(function (ERROR_TYPES) {
    ERROR_TYPES[ERROR_TYPES["NOT_FOUND"] = 0] = "NOT_FOUND";
    ERROR_TYPES[ERROR_TYPES["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
    ERROR_TYPES[ERROR_TYPES["FORBIDDEN"] = 2] = "FORBIDDEN";
})(ERROR_TYPES || (ERROR_TYPES = {}));
function mostrarMensaje(tipoDeError) {
    if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
        console.log('No se encuentra el curso');
    }
    else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permisos para acceder');
    }
    else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permisos para acceder');
    }
}
