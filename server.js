const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const router = require('./router/routes');
const cors = require("cors");


const app = express();
app.set('port',process.env.PORT || 9000);
const dboptions = {
    host : 'localhost',
    port : 3306,
    user: 'root',
    password : '',
    database : 'library'
}
//middleware-------------------------------
app.use(myconn(mysql,dboptions,'single'));
app.use(express.json());
app.use(cors());

//routes------------------------------------
app.get('/',(req,res)=>{
    res.send("welcome to my API")
})
app.use('/api', router);

//server runnig-----------------------------
app.listen(app.get('port'),()=>{
    console.log('server running on port', app.get('port'));
});

