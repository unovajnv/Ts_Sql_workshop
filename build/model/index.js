"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, productName, price) {
        this.id = id;
        this.productName = productName;
        this.price = price;
    }
    getId() {
        return this.id;
    }
    getProductName() {
        return this.productName;
    }
    getPrice() {
        return this.price;
    }
}
exports.Product = Product;
;
