// convention is to use camel case for class name
// classes do not replace objects, we create objects using classes
class Product {
  // defining class fields
  // title = "DEFAULT TITLE";
  // imageUrl;
  // price;
  // description;
  // this refers to instance of class which is created using new keyword
  constructor(title, imageUrl, price, description) {
    // class properties
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class ElementAttribute {
  constructor(name, val) {
    this.name = name;
    this.value = val;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
    this.render();
  }

  render() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootEl = document.createElement(tag);
    if (cssClasses) {
      rootEl.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootEl.setAttribute(attr.name, attr.value);
      }
    }

    document.getElementById(this.hookId).append(rootEl);
    return rootEl;
  }
}

class ShoppingCart extends Component {
  items = [];

  get totalAmount() {
    const totalPrice = this.items.reduce((acc, item) => acc + item.price, 0);
    return totalPrice;
  }

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount}</h2>`;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  // class method
  addProduct(product) {
    const updatedItems = [...this.items, product];
    this.cartItems = updatedItems;
    // this.render();
  }

  render() {
    const cartEl = this.createRootElement("section", "cart", []);
    cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now</button>
    `
    // storing ref to total output
    this.totalOutput = cartEl.querySelector("h2"); 
  }
}

class ProductItem extends Component{
  constructor(product, renderHookId) {
    // it is required to call super method first to use this keyword
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    console.log("Adding product to cart", this.product);
    // calling like class method
    App.addProductToCart(this.product);
  }

  render() {
    const productEl = this.createRootElement("li", "product-item")
    productEl.innerHTML = `
                    <div>
                        <img src='${this.product.imageUrl}' alt='${this.product.title}'>
                        <div class="product-item__content">
                            <h2>${this.product.title}</h2>
                            <h3>\$ ${this.product.price}</h3>
                            <p>${this.product.description}</p>
                            <button>Add to cart!</button>
                        </div>
                    </div>
                `;
    const addCartBtn = productEl.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this));
    
  }
}

class ProductList extends Component{
  products = [];


  fetchProducts() {
    this.products = [
      new Product(
        "A Pillow",
        "https://media.istockphoto.com/id/899226398/photo/pillow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=5pJMfNPtyiZYC7ykDmhi_GEYwXmgTvc8yZp_TSGgt_Q=",
        19.99,
        "A soft pillow"
      ),
      new Product(
        "A Carpet",
        "https://t4.ftcdn.net/jpg/00/89/76/09/360_F_89760942_RmpjUzGtDcERW1rlkNaifMr58NCVu7YB.jpg",
        89,
        "A carpet which you like - or not!"
      ),
    ]
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    const prodListEl = this.createRootElement("ul","product-list",[
      new ElementAttribute("id", "prod-list"),
    ]);
    console.log(this.products);
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, "prod-list");
    }
  }
}

class Shop extends Component{
  constructor() {
    super();
  }
  render() {
    this.cart = new ShoppingCart("app");
    const productList = new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
