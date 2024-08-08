"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
var read = require("../../node_modules/readline-sync");
// dynamic serach
// exception handling
// json (try)
const producToSearch = read.question("Enter Product Name to delete :");
var check = 1;
for (var i = 0; i < product_1.productList.length; i++) {
    if (product_1.productList[i].getProductName().toLocaleLowerCase() === producToSearch.toLocaleLowerCase()) {
        console.log("Product Found:");
        product_1.productList.splice(i, 1);
        check = 0;
        break;
    }
}
if (check) {
    console.log("Product not found");
}
function DisplayProduct() {
    console.log("Updated List of Products  :");
    for (var i = 0; i < product_1.productList.length; i++) {
        console.log("Product Name:", product_1.productList[i].getId());
        console.log("Product Name:", product_1.productList[i].getProductName());
        console.log("Product Name:", product_1.productList[i].getPrice());
    }
}
DisplayProduct();
