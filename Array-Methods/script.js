let products = [
    {
      "id": 1,
      "name": "Laptop",
      "category": "Electronics",
      "price": 999.99,
      "stock": 50
    },
    {
      "id": 2,
      "name": "Smartphone",
      "category": "Electronics",
      "price": 499.99,
      "stock": 100
    },
    {
      "id": 3,
      "name": "Headphones",
      "category": "Electronics",
      "price": 79.99,
      "stock": 200
    },
    {
      "id": 4,
      "name": "Bookshelf",
      "category": "Furniture",
      "price": 149.99,
      "stock": 30
    },
    {
      "id": 5,
      "name": "Coffee Maker",
      "category": "Appliances",
      "price": 49.99,
      "stock": 80
    },
    {
      "id": 6,
      "name": "Dresser",
      "category": "Furniture",
      "price": 199.99,
      "stock": 20
    },
    {
      "id": 7,
      "name": "Wireless Mouse",
      "category": "Electronics",
      "price": 29.99,
      "stock": 150
    },
    {
      "id": 8,
      "name": "Microwave Oven",
      "category": "Appliances",
      "price": 89.99,
      "stock": 60
    },
    {
      "id": 9,
      "name": "Desk Chair",
      "category": "Furniture",
      "price": 79.99,
      "stock": 40
    },
    {
      "id": 10,
      "name": "Blender",
      "category": "Appliances",
      "price": 39.99,
      "stock": 100
    }
  ]

  // 1. map() - List all the names of product
  let productNames = products.map((product)=>{
    // console.log(product.name);
    return product.name;
  })

  console.log(productNames);

  // 2. filter() - filter all the electronics product
  let filteredElectronicsProduct = products.filter((product)=>{
    // console.log(product);
    return product.category == 'Electronics';
  })

  console.log(filteredElectronicsProduct);

  // reduce() -  find total stocks of products
  let totalStocks = products.reduce((acc,product)=>{
    // console.log(product.stock);
    return acc + product.stock;
  },0)

  console.log(totalStocks);

  // sort() - sort all the products according to their increasing price.
  let sortedIncPrice = products.sort((a,b)=>{
    return a.price - b.price;
  })

  console.log(sortedIncPrice);

   // sort() - sort all the products according to their decreasing price.
   let sortedDecPrice = products.sort((a,b)=>{
    return b.price - a.price;
  })

  console.log(sortedDecPrice);

  // find() - find a product whose price is less than 100
  let findProduct = products.find((product)=>{
    return product.price < 100;
  })

  console.log(findProduct);

  // forEach() - print all the product names and stocks
  products.forEach(product => {
    console.log(`Product: ${product.name}, Stock: ${product.stock}`);
});