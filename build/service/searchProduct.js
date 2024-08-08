"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_json_1 = require("../db/db.json");
const logger_1 = __importDefault(require("../logger/logger"));
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
        logger_1.default.info("Product deleted");
        console.log("Product Deleted !");
        check = 0;
        break;
    }
}
if (check) {
    console.log("Product not found");
    logger_1.default.error("Product not found");
}
function DisplayProduct() {
    console.log("Updated List of Products  :");
    for (var i = 0; i < db_json_1.productList.length; i++) {
        console.log("Product Id:", db_json_1.productList[i].id);
        console.log("Product Name:", db_json_1.productList[i].productName);
        console.log("Product Price:", db_json_1.productList[i].price);
    }
}
DisplayProduct();
