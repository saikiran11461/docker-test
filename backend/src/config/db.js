const mongoose = require('mongoose');

const Connection = ()=>{
  return   mongoose.connect("mongodb+srv://saikiranofficial11481:DVMlm7BB336PZGi1@cluster0.dsws2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}


module.exports = Connection;