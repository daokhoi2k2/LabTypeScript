var listProduct = [
    {
        name: "Caramen Cháy",
        price: 49091,
        image: "https://phuclong.com.vn/uploads/dish/8e9e15c6b9704d-cafe5mon03.png"
    },
    {
        name: "Cappuchino - Vietnamo",
        price: 44182,
        image: "https://phuclong.com.vn/uploads/dish/90405a9f256f11-cafe5mon04.png"
    },
    {
        name: "Latte Latte",
        price: 44182,
        image: "https://phuclong.com.vn/uploads/dish/8a92bb4b37c012-cafe5mon01.png"
    },
    {
        name: "Ngọc Viễn Đông",
        price: 44182,
        image: "https://phuclong.com.vn/uploads/dish/6e1c837ccd02b3-cafe5mon05.png"
    },
    {
        name: "Phin Bọt Biển",
        price: 44182,
        image: "https://phuclong.com.vn/uploads/dish/87b1387e4ee409-cafe5mon02.png"
    },
    {
        name: "Phin Sữa Đá - Năng Lượng",
        price: 34363,
        image: "https://phuclong.com.vn/uploads/dish/8ebb07f0eeccc1-resize_damdadunggu07.png"
    },
];
var listEle = document.querySelector("#list");
var html = listProduct
    .map(function (product) {
    var productEle = document.createElement("div");
    productEle.classList.add("col-3", "product-item");
    productEle.innerHTML = "\n            <img\n                src=\"".concat(product.image, "\"\n                alt=\"\"\n            />\n            <h1>").concat(product.name, "</h1>\n            <p>").concat(product.price, " \u0111</p>\n            <button>\u0110\u1EB6T H\u00C0NG</button>\n        ");
    listEle.appendChild(productEle);
})
    .join("");
