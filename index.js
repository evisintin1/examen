const express = require('express')
const path = require('path')
const app = express()
const port = 2500

app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, '/views'));
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });
app.get('/',(req,res)=>{
    var peliculas = 
    [{nombre: 'Aterrados', genero: 'Terror', Director: "Demian Rugna", Disponible: false, img: '../Aterrados.jfif'},
    {nombre: 'El resplandor', genero: 'Terror', Director: "Stanley Kubrick", Disponible: true, img: '../Resplandor.jfif'},
    {nombre: 'Toy story', genero: 'Comedia', Director: "John Lasseter", Disponible: false, img: '../Toy story.jfif'}, 
    {nombre: 'El padrino', genero: 'Accion', Director: "Francisc Coppola", Disponible: true, img: '../padrino.jfif'}, 
    {nombre: 'Taxi Driver', genero: 'Drama', Director: "Martin Scorsese", Disponible: true, img:'../taxi.jfif'}, 
    {nombre: 'El conjuro', genero: 'Terror', Director: "James Wan", Disponible: true, img: '../conjuro.jfif'},
    {nombre: 'Toy story 2', genero: 'Comedia', Director: "John Lasseter", Disponible: true, img: '../Toy story 2.jfif'}, 
    {nombre: 'Tenet', genero: 'Accion', Director: "Cristopher Nolan", Disponible: true, img: '../tenet.jfif'},
    {nombre: 'Inception', genero: 'Accion', Director: "Cristopher Nolan", Disponible: false, img: '../Inception.jfif'}, 
    {nombre: 'Bad boys', tipo: 'Accion', Director: "Michael Bay", Disponible: true, img: '../bad boys.jpg'},
    {nombre: 'El exorcista', genero: 'Terror', Director: "William Friedkin", Disponible: false, img: '../exorcista.jfif'}, 
    {nombre: 'Toy Story 3', genero: 'Comedia', Director: "Lee Unkrich ", Disponible: true, img: '../Toy story 3.jfif'}];
    res.render('server.ejs',{peliculas:peliculas})
  });

app.get('/Dispo')