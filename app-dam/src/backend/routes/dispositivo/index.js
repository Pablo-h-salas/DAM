const express = require('express')
// crea una ruta especifica para manejar las rutas relacionadas con "dispositivos"
const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

routerDispositivo.get('/:id/mediciones', function (req, res) {
    const dispositivoId = req.params.id; // Obtenemos el ID de los parámetros de la URL
    pool.query('SELECT * FROM Mediciones WHERE dispositivoId = ?', [dispositivoId], function (err, result) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        if (result.length === 0) {
            res.status(404).send({ error: 'Dispositivo no encontrado' });
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/:id', function (req, res) {
    const dispositivoId = req.params.id; // Obtenemos el ID de los parámetros de la URL
    pool.query('SELECT * FROM Dispositivos WHERE dispositivoId = ?', [dispositivoId], function (err, result) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        if (result.length === 0) {
            res.status(404).send({ error: 'Dispositivo no encontrado' });
            return;
        }
        res.send(result[0]);
    });
});


routerDispositivo.get('/', function (req, res) {
    pool.query('Select * from Dispositivos', function (err, result, fields) {
        // EN caso de error, el servidor responde HTTP 400
        if (err) {
            res.send(err).status(400);
            return;
        }
        // Consulta exitosa, devuelve el resultado en formato JSON
        res.send(result);
    });
});

// Ruta para insertar una nueva medición
routerDispositivo.post('/mediciones', function (req, res) {
    const { dispositivoId, valor } = req.body; // Obtenemos dispositivoId y el valor (humedad)
    const fecha = new Date().toISOString().slice(0, 19).replace('T', ' '); // Fecha actual en formato YYYY-MM-DD HH:MM:SS
    const query = 'INSERT INTO Mediciones (fecha, valor, dispositivoId) VALUES (?, ?, ?)';
    pool.query(query, [fecha, valor, dispositivoId], function (err, result) {
        if (err) {
            res.status(400).send(err); // En caso de error
            return;
        }
        res.status(200).send({ message: 'Medición insertada correctamente', id: result.insertId });
    });
});

// Ruta para insertar los registros de riego
routerDispositivo.post('/log_riegos', function (req, res) {
    const { apertura, electrovalvulaId } = req.body;
    const fecha = new Date().toISOString().slice(0, 19).replace('T', ' '); // Fecha actual en formato MySQL

    const query = 'INSERT INTO Log_Riegos (apertura, fecha, electrovalvulaId) VALUES (?, ?, ?)';
    pool.query(query, [apertura, fecha, electrovalvulaId], function (err, result) {
        if (err) {
            res.status(400).send(err); // Enviar error en caso de problemas
            return;
        }
        res.status(200).send({
            message: 'Log de riego insertado correctamente',
            id: result.insertId, // El ID generado automáticamente
        });
    });
});


// Exportacion del router
module.exports = routerDispositivo