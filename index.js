// 1. Importar Express
const express = require('express');

// 2. Creamos instancia de la aplicación (nuestro servidor)
const app = express();
app.use(express.json()); // Middleware para parsear JSON

const PORT = 3000; // Puerto donde escuchará el servidor

// Ruta raíz — muestra tu autoría
app.get('/', (req, res) => {
    res.send("API REST del Taller - Desarrollado por Barrón González José Ángel");
});

// Ruta de ejemplo con metadatos
app.get('/saludo', (req, res) => {
    res.json({
        mensaje: "Hola desde la API",
        autor: "Barrón González José Ángel",
        fecha: new Date(),
        carrera: "Ingeniería de Sistemas Computacionales (ISC)"
    });
});

// Mock de datos: usuarios
const usuarios = [
    { id: 1, nombre: "José Ángel", edad: 22 },
    { id: 2, nombre: "María", edad: 34 },
    { id: 3, nombre: "Pedro", edad: 45 }
];

// GET: Obtener todos los usuarios
app.get('/user', (req, res) => {
    res.json({
        usuarios: usuarios
    });
});

// POST: Crear un nuevo usuario
app.post('/user', (req, res) => {
    /**
     * Estructura esperada del cuerpo de la petición:
     * nombre: String
     * edad: Number
     */
    const { nombre, edad } = req.body;

    if (!nombre || edad === undefined) {
        return res.status(400).json({ error: "Los campos 'nombre' y 'edad' son requeridos." });
    }

    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
        edad
    };

    usuarios.push(nuevoUsuario);

    res.status(201).json({
        mensaje: "Usuario agregado exitosamente",
        nuevo_usuario: nuevoUsuario,
        usuarios: usuarios
    });
});

// PUT: Actualizar un usuario por ID
app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, edad } = req.body;

    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    if (usuarioIndex === -1) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Actualizar solo los campos proporcionados
    if (nombre !== undefined) usuarios[usuarioIndex].nombre = nombre;
    if (edad !== undefined) usuarios[usuarioIndex].edad = edad;

    res.json({
        mensaje: "Usuario actualizado exitosamente",
        usuario_actualizado: usuarios[usuarioIndex],
        usuarios: usuarios
    });
});

// DELETE: Eliminar un usuario por ID
app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const usuarioIndex = usuarios.findIndex(u => u.id === id);
    if (usuarioIndex === -1) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const usuarioEliminado = usuarios.splice(usuarioIndex, 1)[0];

    res.json({
        mensaje: "Usuario eliminado exitosamente",
        usuario_eliminado: usuarioEliminado,
        usuarios: usuarios
    });
});

// Middleware de manejo de errores 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Error interno del servidor" });
});

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});