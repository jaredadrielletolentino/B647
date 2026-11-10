
// Capstone Solution here:
// 1. Product Class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.isActive = true;
    }

    archive() {
        if (this.isActive) {
            this.isActive = false;
        }
        return this;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
        return this;
    }
}

// 2. Cart Class
class Cart {
    constructor() {
        this.contents = [];
        this.totalAmount = 0; 
    }

    addToCart(product, quantity) {
        this.contents.push({ product: product, quantity: quantity });
        return this;
    }

    showCartContents() {
        console.log(this.contents);
        return this;
    }

    updateProductQuantity(productName, newQuantity) {
        let item = this.contents.find(cartItem => cartItem.product.name === productName);
        if (item) {
            item.quantity = newQuantity;
        }
        return this;
    }

    clearCartContents() {
        this.contents = [];
        this.totalAmount = 0;
        return this;
    }

    computeTotal() {
        this.totalAmount = this.contents.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);
        return this;
    }
}

// 3. Customer Class
class Customer {
    constructor(email) {
        this.email = email; 
        this.cart = new Cart();
        this.orders = [];
    }

    checkOut() {
        if (this.cart.contents.length > 0) {
            // Push order object containing current cart contents and totalAmount
            this.orders.push({
                products: [...this.cart.contents],
                totalAmount: this.cart.totalAmount
            });
        }
        return this;
    }
}

//test cases
const john = new Customer('john@mail.com')

const prodA = new Product('soap', 9.99)
const prodB = new Product('shampoo', 12.99)
const prodC = new Product('toothbrush', 4.99)
const prodD = new Product('toothpaste', 14.99)

john.cart.addToCart(prodA, 3)
john.cart.addToCart(prodB, 2)

//john.cart.computeTotal()
john.cart.updateProductQuantity('soap', 5)
john.cart.showCartContents()
//john.cart.clearCartContents()
//john.cart.showCartContents()
john.checkOut()

console.log(john);