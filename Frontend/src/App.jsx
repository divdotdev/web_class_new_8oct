import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch("https://web-class-new-8oct.onrender.com/api/products");
        let data = await response.json();
        console.log(data);
        setProducts(data[0]?.products || data.products || data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default App;