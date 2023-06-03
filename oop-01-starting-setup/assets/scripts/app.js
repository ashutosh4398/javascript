const app = document.getElementById("app");

class Product {
  // defining class fields
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  // here this refers to class instance/object which is created using new keyword
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order now!</button>
    `;
    cartEl.className = "cart";
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCartHandler() {
    console.log("Adding product to cart...")
    console.log(this.product);
  }

  render() {
    const productEl = document.createElement("li");
    productEl.className = "product-item";
    productEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" />
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>\$${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
    const addCartButton = productEl.querySelector("button");
    // this will point to btn element inside the eventHandler
    // thus we have to bind
    addCartButton.addEventListener("click", this.addToCartHandler.bind(this));
    return productEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "A soft pillow",
      10.19
    ),

    new Product(
      "A Carpet",
      "https://images.unsplash.com/photo-1558944351-3f79926e74ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "Expensive carpet, which you may like -- or not",
      80.19
    ),
  ];

  render() {
    const productList = document.createElement("li");
    productList.className = "product-list";
    app.append(productList);
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const productEl = productItem.render();
      productList.append(productEl);
    }
    return productList;
  }
}

class Shop {

  render() {
    const renderHook = document.getElementById("app");

    const cart = new ShoppingCart();
    cart.render();
    const productList = new ProductList();
    productList.render();

  }
}

