const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const professionalRoutes = require(/.routes/professional)

app.use(bodyParser.json());

app
    .use(bodyParser.json())
    .use((req : Request<ParamsDictionary ,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
    })
    .use('/professional', professionalRoutes);

mongodb.initDb(err: Any, mongodb:any) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Connected to DB and listening on 8088')
    }
});

const port : string | 8080 = process.env.PORT || 8080;

// start server
app.listen(port, () => {
    console.log(`Server is running on ${8080}`)
});