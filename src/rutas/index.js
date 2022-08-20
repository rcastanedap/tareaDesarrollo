const { Router } = require("express");
const router = new Router();

let alumnos = [];

router.get('/', (req, res) => {
    res.render("index", { alumnos });
});

router.get('/about', (req, res) => {
    res.render("about");
});
router.get('/registro-formulario', (req, res) => {
    res.render("registro-formulario");
});

router.post('/registro-formulario', (req, res) =>{
    let {nombre, apellido, direccion, documento} = req.body;
    let nuevoRegistro = { nombre,apellido, direccion, documento, fecha: new Date() };
    alumnos.push(nuevoRegistro);
    res.redirect('/');
});

module.exports = router;
































