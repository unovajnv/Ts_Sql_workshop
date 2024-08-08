export class Product {
    private id: number;
    private productName: string;
    private price: number;

    constructor(id: number, productName: string, price: number) {
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
};