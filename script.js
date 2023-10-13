document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");

    const products = [
        { name: "ROG", price: "$999", image: "download1.jpg" },
        { name: "ALIENWARE", price: "$799", image: "download2.jpg" },
        { name: "LEGION", price: "$1299", image: "download3.jpg" },
    ];

    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className = "product";

        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;

        const nameElement = document.createElement("h3");
        nameElement.textContent = product.name;

        const priceElement = document.createElement("p");
        priceElement.textContent = product.price;

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);

        productsList.appendChild(productElement);
    });

    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");

    scrollToProductsLink.addEventListener("click", function (event) {
        event.preventDefault();

        featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
});