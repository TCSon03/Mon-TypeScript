import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { Product } from "./interfaces/Product";
import instance from "./services";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  }, []);
  return (
    <>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add new product</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route index element={<Home products={products} />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
