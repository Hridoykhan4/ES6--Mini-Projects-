const loadProducts = async (catName) => {
  document.getElementById("loading-cotnainer").style.display = "block";
  // console.log(catName)
  const res = await fetch(`https://fakestoreapi.com/products${catName}`);
  const data = await res.json();

  if (data.length === 0) {
    document.getElementById("not-found").style.display = "block";
  } else {
    document.getElementById("not-found").style.display = "none";
  }

  const productContainer = document.getElementById("products-container");
  productContainer.innerText = "";

  data.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
           <img src="${product.image}" class="product-img" alt="">
            <h3>${product.title}</h3>
            <div class="price-category">
                <h4>Price: ${product.price}</h4>
                <button class="category-btn" disabled>${product.category}</button>
            </div>
        </hr>
        <div class="price-container">
            <div class="icon-container">
                <img src="images/view.png" class="icon" alt="asdas">
                <h4>${product.rating.count}</h4>
                </div>
            <div class="icon-container">
            <img src="images/star.png" class="icon" alt="asdas">
                <h4>${product.rating.rate}</h4>
                </div>
            <button onclick="addToCart('${product.title}', '${product.price}')" class="add-btn">Add to cart</button>
        </div>
        
        `;
    productContainer.appendChild(div);
  });
  document.getElementById("loading-cotnainer").style.display = "none";
};

const addToCart = (title, price) => {
  const cartContainer = document.getElementById("cart");
  const div = document.createElement("div");
  div.classList.add("cart-info");
  div.innerHTML = `
        <strong>Title: ${title}</strong>
        <strong>Price: ${price}</strong>
        `;
  cartContainer.appendChild(div);
};

loadProducts("");

const handleSearch = () => {
  const searchBox = document.getElementById("search-box").value;
  loadProducts(`/category/${searchBox}`);
};

/* 

API
AllProducts: - https://fakestoreapi.com/products

PostSearchByQuery
PostByQuery: - https://fakestoreapi.com/products/category/${categoryName}

Example
PostByQuery: - https://fakestoreapi.com/products/category/jewelery

*/
