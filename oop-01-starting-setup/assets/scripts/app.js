const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl: "https://media.istockphoto.com/id/899226398/photo/pillow-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=5pJMfNPtyiZYC7ykDmhi_GEYwXmgTvc8yZp_TSGgt_Q=",
      price:19.99,
      description: "A soft pillow",
    },
    {
      title: "A Carpet",
      imageUrl: "https://t4.ftcdn.net/jpg/00/89/76/09/360_F_89760942_RmpjUzGtDcERW1rlkNaifMr58NCVu7YB.jpg",
      price: 89,
      description: "A carpet which you like or not!",
    },
  ],

  render() {
    const renderHook = document.getElementById("app");
    const prodListEl = document.createElement("ul");
    prodListEl.className = "product-list";
    for (const prod of this.products) {
      const productEl = document.createElement("li");
      productEl.className = "product-item";
      productEl.innerHTML = `
                <div>
                    <img src='${prod.imageUrl}' alt='${prod.title}'>
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$ ${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to cart!</button>
                    </div>
                </div>
            `;
      prodListEl.append(productEl);
    }
    renderHook.append(prodListEl);
  },
};

productList.render();
