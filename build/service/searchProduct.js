"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_json_1 = require("../db/db.json");
var read = require("../../node_modules/readline-sync");
// dynamic serach
// exception handling
// json (try)
const producToSearch = read.question("Enter Product Name to delete :");
let product = db_json_1.productList;
//console.log(product);
var check = 1;
for (var i = 0; i < db_json_1.productList.length; i++) {
    if (db_json_1.productList[i].productName.toLocaleLowerCase() === producToSearch.toLocaleLowerCase()) {
        console.log("Product Found !");
        db_json_1.productList.splice(i, 1);
        console.log("Product Deleted !");
        check = 0;
        break;
    }
}
if (check) {
    console.log("Product not found");
}
function DisplayProduct() {
    console.log("Updated List of Products  :");
    for (var i = 0; i < db_json_1.productList.length; i++) {
        console.log("Product Name:", db_json_1.productList[i].id);
        console.log("Product Name:", db_json_1.productList[i].productName);
        console.log("Product Name:", db_json_1.productList[i].price);
    }
}
DisplayProduct();
