var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Store = (function () {
    function Store() {
    }
    return Store;
}());
var StoreMilkTea = (function (_super) {
    __extends(StoreMilkTea, _super);
    function StoreMilkTea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listProduct = [
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
        _this.getStore = function () {
            return _this.listProduct;
        };
        _this.addItem = function (milkTea) {
            _this.listProduct.push(milkTea);
            return _this.listProduct;
        };
        return _this;
    }
    return StoreMilkTea;
}(Store));
var storeMilkTea = new StoreMilkTea();
var listEle2 = document.querySelector("#list");
var html = storeMilkTea.getStore()
    .map(function (product) {
    var productEle = document.createElement("div");
    productEle.classList.add("col-3", "product-item");
    productEle.innerHTML = "\n            <img\n                src=\"".concat(product.image, "\"\n                alt=\"\"\n            />\n            <h1>").concat(product.name, "</h1>\n            <p>").concat(product.price, " \u0111</p>\n            <button>\u0110\u1EB6T H\u00C0NG</button>\n        ");
    listEle2.appendChild(productEle);
})
    .join("");
