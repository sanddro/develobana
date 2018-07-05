import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
    res.send('hello');
});

app.listen(PORT, e => {
    if(e) {
        console.log(e);
    }else {
        console.log(`Listening to port ${PORT}!`);
    }
});