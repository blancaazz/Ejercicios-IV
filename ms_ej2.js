var express = require("express");
var app = express();
var port = process.env.PORT || 8080

const Registro_libros = require("../Lecturas/src/Registro_libros.js");
const Libro = require("../Lecturas/src/Libro.js");

const libro_momo = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);


app.get("/", function(req, res){
    reg = new Registro_libros();
    reg.registrarLibro(libro_momo);
    res.send(reg);
});

app.put("/libro/:nombre/:autora/:comentario/:puntuacion",
    function(req, res){

        
    }
)

app.listen(port);
console.log("Servidor en el http://127.0.0.1" + port + "/");