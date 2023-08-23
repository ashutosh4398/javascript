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

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, render=true) {
    this.hookId = renderHookId;
    if(render) {
      this.render();
    }
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElem = document.createElement(tag);
    if(cssClasses) {
      rootElem.className = cssClasses;
    }
    if(attributes && attributes.length > 0) {
      for(const attr of attributes) {
        rootElem.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElem)
    return rootElem;
  }
}

class ShoppingCart extends Component{
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `Total amount: \$${this.totalAmount.toFixed(2)}`;
  }

  get totalAmount() {
    return this.items.reduce((acc, current) => acc + current.price, 0);
  }

  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
  }

  addProduct(product) {
    const updatedItems = [...this.items, product];
    this.cartItems = updatedItems;
  }

  // arrow function as field
  orderProducts = () => {
    console.log("ordering...");
    console.table(this.items);
    console.log(this);
  }

  render() {
    // const cartEl = document.createElement("section");
    const cartEl = this.createRootElement("section", "cart");

    cartEl.innerHTML = `
      <h2>Total amount: \$${0}</h2>
      <button>Order now!</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
    const orderButton = cartEl.querySelector("button");
    // orderButton.addEventListener("click", () => {this.orderProducts()})
    orderButton.addEventListener("click", this.orderProducts)
  }
}

class ProductItem extends Component {
  // used to render a product
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    // explicitly call render after product is set
    this.render();
  }

  addToCart() {
    console.log("Adding product to cart!");
    console.log(this.product);
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
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
    // return prodEl;
  }
}

class ProductList extends Component {

  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

  fetchProducts() {
    this.products = [
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

    this.renderProducts();
  }

  renderProducts() {
    for (const product of this.products) {
      new ProductItem(product, "prod-list");
    }
  }

  render() {
    this.createRootElement("ul", "product-list", [new ElementAttribute("id", "prod-list")]);
    if(this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop extends Component {
  
  constructor() {
    super()
  }

  render() {
    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

class App {
  static cart; // just for readability

  static init() {
    const shop = new Shop();
    this.cart = shop.cart; // this points to class object and not any instance
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
    // since this method will be called using class name, this will refer to class
    // ex: App.addProductToCart();
  }
}

App.init();
