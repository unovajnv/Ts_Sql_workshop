import { Product } from "../model/index";
import{productList } from"../db/db.json"
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
        console.log("Product Deleted !");
        check = 0;
        break;
    }
}
if(check)
{
    console.log("Product not found");
}

function DisplayProduct()
{
    console.log("Updated List of Products  :");
    for (var i = 0; i < productList.length; i++) {
        console.log("Product Name:", productList[i].id);
        console.log("Product Name:", productList[i].productName);
        console.log("Product Name:", productList[i].price);
    }
}
DisplayProduct();