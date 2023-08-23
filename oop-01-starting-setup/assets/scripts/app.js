class Product {
  // grouping data
  // product definition
  constructor({ title, imageUrl, price, description }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}


class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `Total amount: \$${1}`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total amount: \$${0}</h2>
      <button>Order now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
    cartEl.className = "cart";
    return cartEl;
  }
}

class ProductItem {
  // used to render a product
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Adding product to cart!");
    console.log(this.product);
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" />
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
    `;

    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}


class ProductList {
  // class field
  products = [
    new Product({
      title: "A Pillow",
      imageUrl:
        "https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 19.99,
      description: "A soft pillow",
    }),
    new Product({
      title: "A Carpet",
      imageUrl:
        "https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 89.99,
      description: "Carpet it is",
    }),
  ];

  constructor() {
    // ...
  }

  render() {
    
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const prodEl = productItem.render()
      prodList.append(prodEl);
    }

    return prodList;
  }
}



class Shop {
  render() {
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const shoppingCartEl = this.cart.render();
    const productList = new ProductList();
    const productListEl = productList.render();
    renderHook.append(shoppingCartEl);
    renderHook.append(productListEl);
  }
}

class App {
  static cart; // just for readability
  
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart; // this points to class object and not any instance
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
    // since this method will be called using class name, this will refer to class
    // ex: App.addProductToCart();
  }
}


App.init()



