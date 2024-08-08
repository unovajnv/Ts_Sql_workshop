import { Product } from "../model/index";
import { Logger } from "winston";
import{productList } from"../db/db.json"
import logger from "../logger/logger";
var read = require("../../node_modules/readline-sync");
// dynamic serach
// exception handling
// json (try)
const producToSearch = read.question("Enter Product Name to delete :")
let product = productList;
//console.log(product);
var check = 1;
for (var i = 0; i <productList.length; i++) {
    if (productList[i].productName.toLocaleLowerCase() === producToSearch.toLocaleLowerCase()) {
        console.log("Product Found !");
         productList.splice(i, 1);
         logger.info("Product deleted");
        console.log("Product Deleted !");
        check = 0;
        break;
    }
}
if(check)
{
    console.log("Product not found");
    logger.error("Product not found");
}

function DisplayProduct()
{
    console.log("Updated List of Products  :");
    for (var i = 0; i < productList.length; i++) {
        console.log("Product Id:", productList[i].id);
        console.log("Product Name:", productList[i].productName);
        console.log("Product Price:", productList[i].price);
    }
}
DisplayProduct();
