// list-banner.js
const products = [
  {
    title: "Reveal The Beauty of Skin",
    description:
      "Made using clean, non-toxic ingredients, our products are designed for everyone.",
    price: 299000,
    currency: "VND",
    imageUrl: "./assets/images/hero-banner-1.jpg",
  },
  {
    title: "Reveal The Beauty of Skin",
    description:
      "Made using clean, non-toxic ingredients, our products are designed for everyone.",
    price: 200000,
    currency: "VND",
    imageUrl: "./assets/images/hero-banner-2.jpg",
  },
  {
    title: "Reveal The Beauty of Skin",
    description:
      "Made using clean, non-toxic ingredients, our products are designed for everyone.",
    price: 399000,
    currency: "VND",
    imageUrl: "./assets/images/hero-banner-3.jpg",
  },
];

// Hàm để tạo danh sách sản phẩm và chèn vào DOM
function generateBannerList() {
  const productListElement = document.querySelector(".has-scrollbar");
  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "scrollbar-item";

    li.innerHTML = `
      <div class="hero-card has-bg-image" style="background-image: url('${
        product.imageUrl
      }')">
        <div class="card-content">
          <h1 class="h1 hero-title">${product.title}</h1>
          <p class="hero-text">${product.description}</p>
          <p class="price">Starting at ${product.price.toLocaleString()} ${
      product.currency
    }</p>
          <a href="#" class="btn btn-primary">Shop Now</a>
          <button class="btn btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
    `;

    // Thêm sự kiện cho nút "Add to Cart"
    li.querySelector(".btn-add-to-cart").addEventListener("click", () => {
      addToCart(
        product.title,
        product.price,
        product.currency,
        product.imageUrl,
      );
    });

    productListElement.appendChild(li);
  });
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price, currency, imageUrl) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Lấy giỏ hàng từ localStorage

  // Thêm sản phẩm vào giỏ hàng
  cart.push({ name, price, currency, imageUrl });

  // Cập nhật giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} has been added to your cart!`); // Thông báo thêm thành công
}

// Xuất hàm để sử dụng
export { generateBannerList };
