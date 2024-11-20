const productController = require("../controllers/product.controller");


const {Router}  = require("express");

const productRouter = Router();

productRouter.get("/", productController.getData);
productRouter.post("/addProduct", productController.postData)

module.exports = productRouter;