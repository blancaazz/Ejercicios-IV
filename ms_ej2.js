var express = require("express");
var app = express();
var port = process.env.PORT || 8080

const Registro_libros = require("../Lecturas/src/Registro_libros.js");
const Libro = require("../Lecturas/src/Libro.js");

const libro_momo = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);
var reg = new Registro_libros();

app.get("/", function(req, res){

    reg.registrarLibro(libro_momo);
    res.send(reg);
});

app.put("/libro/:nombre/:autora/:comentario/:puntuacion",
    function(req, res){
        var nuevo_libro = new Libro(req.params.nombre, req.params.autora, req.params.comentario, req.params.puntuacion);
        reg.registrarLibro(nuevo_libro);
        res.send(nuevo_libro);
    }
)

app.listen(port);
console.log("Servidor en el http://127.0.0.1:" + port + "/");