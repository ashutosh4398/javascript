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

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Adding product to cart", this.product);
  }

  render() {
    const productEl = document.createElement("li");
    productEl.className = "product-item";
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
    return productEl;
  }
}

class ProductList {
  products = [
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
      "A carpet which you like or not!"
    ),
  ];

  render() {
    const renderHook = document.getElementById("app");
    const prodListEl = document.createElement("ul");
    prodListEl.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodListEl.append(prodEl);
    }
    renderHook.append(prodListEl);
  }
}

const productList = new ProductList();
productList.render();
