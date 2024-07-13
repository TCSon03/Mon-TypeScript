import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interfaces/Product";
import instance from "./apis";
import Dashboard from "./pages/admin/Dashboard";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/products`);
      setProducts(data);
    })();
  }, []);

  const handleRemove = async (id: number) => {
    if (confirm("Are you sure?")) {
      await instance.delete(`/products/${id}`);
      setProducts(products.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Add new product">Add new product</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </header>
      {/* <Dashboard products={products} handleRemove={handleRemove} /> */}
      <Routes>
        <Route index element={< /></>} />
      </Routes>
    </>
  );
}

export default App;
