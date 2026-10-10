import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        const productList = Array.isArray(data)
          ? (data[0]?.products || data)
          : (data.products || []);
        setProducts(Array.isArray(productList) ? productList : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <header style={{ padding: '24px 0', borderBottom: '1px solid #e5e4e7' }}>
        <h1 style={{ margin: 0, fontSize: '32px' }}>Product Store</h1>
      </header>

      {loading && (
        <div style={{ padding: '50px', textAlign: 'center', fontSize: '18px' }}>
          Loading products...
        </div>
      )}

      {error && !loading && (
        <div style={{ padding: '40px', textAlign: 'center', color: '#e63946' }}>
          <p>Error: {error}</p>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
            Ensure backend server is running on port 3000.
          </p>
        </div>
      )}

      {!loading && !error && <ProductsList products={products} />}
    </div>
  );
}

export default App;