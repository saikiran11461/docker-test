const express = require('express');
const cors = require('cors');
const Connection = require('./src/config/db');
const productRouter = require('./src/routes/product.routes');

const app = express();

app.use(
    cors({
      origin: "http://localhost:3000", 
      methods: ["GET", "POST", "PUT", "DELETE"], 
      allowedHeaders: ["Content-Type"], 
    })
  );
  

app.use(express.json())


app.use("/api/products", productRouter)

app.listen(8080,()=>{
   try {
    Connection()
   } catch (error) {
    
   }

})
