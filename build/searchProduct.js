"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
var producToSearch = "Samsumg G30";
console.log("User want to delete Samsumg G30");
for (var i = 0; i < product_1.productList.length; i++) {
    if (product_1.productList[i].getProductName() === producToSearch) {
        console.log("Product Found:", product_1.productList[i]);
        product_1.productList.splice(i, 1);
        break;
    }
}
function DisplayProduct() {
    console.log("Updated List of Product:");
    for (var i = 0; i < product_1.productList.length; i++) {
        console.log("Product Name:", product_1.productList[i].getId());
        console.log("Product Name:", product_1.productList[i].getProductName());
        console.log("Product Name:", product_1.productList[i].getPrice());
    }
}
DisplayProduct();
