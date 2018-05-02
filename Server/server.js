const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const api = require('./server/routes/api');
const port = 3030;


const app = express();

app.use(express.static(path.join(__dirname+ 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api',api);
app.use(cors());

app.get('*',(req,res) => {
   res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port,function(){
    console.log("Server running...")
})