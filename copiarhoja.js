function crearcopiahoja() {
var hoja = DriveApp.getFileById('1PSSG_XrdH5pIiXmOHm8pG72LwHDAlvorXfTI0xPMIH4'); // Obtener hoja de cálculo de google por id

var file = "LunesPruebaCopia"; //le asignamos un nombre a la copia que nos creamos.
var folder = DriveApp.getFolderById("1HH_HKGYcNamQsu3PQl5Kh6OstQmlw8ds"); //obtenemos el identificador del directorio donde queremos alojar la copia
hoja.makeCopy(file,folder); //aplicamos la funcion hacer copia
}//fin script
