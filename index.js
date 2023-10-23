const express   =   require('express');
const app   =   express();
const db    =   require('./config/mongoose');
const port  =   8000;

// Middleware using body parser to parse over the request body
app.use(express.urlencoded());

//Routes
app.use('/products',require('./routes'))

//Starting the Server
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on: ${port}`);
})