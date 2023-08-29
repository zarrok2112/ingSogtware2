import express from 'express';
import { sendNotification,startNotificationService } from './listener.mjs';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Quiobo People!');
    });

    // app.get('/test/:nombre', (req, res) => {
    //     res.send('TESTEO '. req.params.nombre);
    //     });

app.post('/test/post', (req, res) => {
    console.log(req.body);
    sendNotification(req.body)
    res.send('TESTEO POST ' + req.body.nombre);
});

startNotificationService();

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
    }
);
    
