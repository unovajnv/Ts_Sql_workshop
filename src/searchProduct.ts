import { productList } from "./product";
var producToSearch = "Samsumg G30";
console.log("User want to delete Samsumg G30");
for (var i = 0; i <productList.length; i++) {
    if (productList[i].getProductName() === producToSearch) {
        console.log("Product Found:", productList[i]);
        productList.splice(i, 1);
        break;
    }
}

function DisplayProduct()
{
    console.log("Updated List of Product:");
    for (var i = 0; i < productList.length; i++) {
        console.log("Product Name:", productList[i].getId());
        console.log("Product Name:", productList[i].getProductName());
        console.log("Product Name:", productList[i].getPrice());
    }
}
DisplayProduct();