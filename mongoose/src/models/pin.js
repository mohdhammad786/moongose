const mongoose =require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('debug', true);
const pincodeSchema = new Schema({
    officeName:String,
    pincode:Number, 
    taluk:String,
    districtName:String,
    stateName:String
},{collection:'pincode'});
var Pin=mongoose.model("Pin",pincodeSchema);
module.exports=Pin;
