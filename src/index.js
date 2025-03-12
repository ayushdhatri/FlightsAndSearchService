const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require('./config/serverConfig');


const setupAndStartServer = async() => {
    // create the express object

    const app = express();
    // to manipulate the data easily by server we convert it into javascript object
    app.use(bodyParser.json());
    //When the user submits this form, the browser sends the form data to the server in a URL-encoded format, like this:
    app.use(bodyParser.urlencoded({extended:true}));
  
    app.listen(PORT, ()=>{
        console.log(`server started at port number ${PORT}`);
    });


}

setupAndStartServer();
