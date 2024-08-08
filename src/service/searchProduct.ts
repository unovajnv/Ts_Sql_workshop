import { productList } from "./product";
var read = require("../../node_modules/readline-sync");
// dynamic serach
// exception handling
// json (try)
const producToSearch = read.question("Enter Product Name to delete :")
var check = 1;
for (var i = 0; i <productList.length; i++) {
    if (productList[i].getProductName().toLocaleLowerCase() === producToSearch.toLocaleLowerCase()) {
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
        console.log("Product Name:", productList[i].getId());
        console.log("Product Name:", productList[i].getProductName());
        console.log("Product Name:", productList[i].getPrice());
    }
}
DisplayProduct();