const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hammad', {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection;
db.on('error', function (err) { throw err }); 
db.once('open', function callback() {
   console.log('connected to database!');
db.close();
});
module.exports=db;