import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import keys from './config/keys';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(keys.mongoURL, { useNewUrlParser: true })
  .then(err => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

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