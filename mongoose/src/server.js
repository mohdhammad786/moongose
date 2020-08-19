const express = require('express');
const db=require('./dao.js');
const app= express();
const nunjucks=require("nunjucks");
const path = require('path');
const Pin=require('./models/pin');
app.use(express.static(path.resolve(__dirname,'public')));
nunjucks.configure(path.resolve(__dirname,'views'),{
    express:app,
    autoscape:true,
    noCache:false, 
    watch:true
}); 

app.get("/",(req,res)=>{
    console.log("hi"); 
   /*let pinobject= new Pin({ officeName:"hammad",
    pincode:0, 
    taluk:"hammad",
    districtName:"hammad",
    stateName:"hammad"});
    console.log(pinobject);
   pinobject.save(function (err, data) {
    if (err){
        console.log(err);
        console.log("hi12");
         db.close();
       }
    else{
        console.log(data.taluk + " saved to collection.");
         db.close();
       }
    })*/
    console.log(Pin);
    Pin.find({pincode:110025},(err,data)=>{
        if(err)
        {
            console.log("error");

        }
        else{
            console.log(data);
            
        }
        
    });
    res.render('index.html',{});
    
});
app.listen(80,()=>{
    console.log("App running at port 80");
});


