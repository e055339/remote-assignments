function ajax(src, callback) {
  // your code here
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      if (xhr.status === 200) {
        callback(data);
      } else {
        console.log(xhr.status);
      }
    }
  };
  xhr.open("GET", src, true);
  xhr.send();
}

function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  let container = document.createElement("div");
  container.id = "container";
  document.body.appendChild(container);

  data.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.className = "product";

    let name = document.createElement("h2");
    name.innerHTML = "產品名稱: " + product.name;
    productDiv.appendChild(name);

    let price = document.createElement("p");
    price.innerHTML = "產品價格: " + product.price;
    productDiv.appendChild(price);

    let description = document.createElement("p");
    description.innerHTML = "產品描述: " + product.description;
    productDiv.appendChild(description);

    container.appendChild(productDiv);
  });
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
