let products;

fetch('https://win22-webapi.azurewebsites.net/api/products')
  .then(res => res.json())
  .then(data => {
    products = data;
   });

console.log(products);

export default products