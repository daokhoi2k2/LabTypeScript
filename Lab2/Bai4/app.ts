interface IMilkTea {
  name: string;
  price: number;
  image: string;
}

const listProduct: IMilkTea[] = [
  {
    name: "Caramen Cháy",
    price: 49091,
    image: "https://phuclong.com.vn/uploads/dish/8e9e15c6b9704d-cafe5mon03.png",
  },
  {
    name: "Cappuchino - Vietnamo",
    price: 44182,
    image: "https://phuclong.com.vn/uploads/dish/90405a9f256f11-cafe5mon04.png",
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

const listEle = document.querySelector("#list");

const html = listProduct
  .map((product) => {
    const productEle = document.createElement("div");
    productEle.classList.add("col-3", "product-item");
    productEle.innerHTML = `
            <img
                src="${product.image}"
                alt=""
            />
            <h1>${product.name}</h1>
            <p>${product.price} đ</p>
            <button>ĐẶT HÀNG</button>
        `;
    listEle.appendChild(productEle);
  })
  .join("");
