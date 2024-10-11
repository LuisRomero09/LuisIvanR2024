const express = require('express');
const mysql = require('mysql');
const path = require('path');
const basicAuth = require('express-basic-auth');

const app = express();
const port = 3000;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); 


app.use(express.urlencoded({ extended: true }));


app.use(basicAuth({
    users: { 'Admin': 'Admin12345' }, // Cambia por tus credenciales
    challenge: true, // Activa el desafío de autenticación
    realm: 'Protected Area' // Nombre del área protegida
}));

// Configura la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Admin', 
    password: 'Admin12345', 
    database: 'personas' 
});

// Conecta a la base de datos
db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});


app.get('/', (req, res) => {
    res.render('index');
});


app.post('/add', (req, res) => {
    const { nombre, edad } = req.body;
    const sql = 'INSERT INTO personas (nombre, edad) VALUES (?, ?)';
    db.query(sql, [nombre, edad], (err, result) => {
        if (err) throw err;
        res.send('Persona añadida con éxito');
    });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
