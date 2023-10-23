const mongoose  =   require('mongoose');

mongoose.connect('mongodb+srv://codingninjas:XFkvgK6lpagARKKi@cluster0.ote8ulr.mongodb.net/?retryWrites=true&w=majority');

const db    =   mongoose.connection;

db.on('error',console.error.bind(console,'Error Connecting to MongoDB'));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports  =   db;