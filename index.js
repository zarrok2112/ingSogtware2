import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Quiobo People!');
    });

    app.get('/test/:nombre', (req, res) => {
        res.send('TESTEO '. req.params.nombre);
        });

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
    } )