import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { Product } from "./interfaces/Product";
import instaince from "./apis/index";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      const { data } = await instaince.get("/products");
      setProducts(data);
    })();
  }, []);
  const handleDelete = (id: Number) => {
    // console.log(id);
    (async () => {
      const isConfirm = confirm("Are you sure?");
      if (isConfirm) {
        await instaince.delete(`/products/${id}`);
        // console.log(data);
        setProducts(products.filter((item) => item.id !== id && item));
      }
    })();
  };
  const handleAddProduct = (product: Product) => {
    // console.log(product);
    (async () => {
      const { data } = await instaince.post(`/products`, product);
      setProducts([...products, data]);
      nav(`/`);
    })();
  };
  const handleEditProduct = (product: Product) => {
    // console.log(product);
    (async () => {
      const { data } = await instaince.put(`/products/${product.id}`, product);
      setProducts(products.map((item) => (item.id === data.id ? data : item)));
      nav(`/`);
    })();
  };

  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add new product</NavLink>
          </li>
          <li>
            <NavLink to="/register">register</NavLink>
          </li>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        </ul>
      </header>
      <Routes>
        <Route
          index
          element={<Home products={products} onDel={handleDelete} />}
        />
        <Route
          path="/add"
          element={<AddProduct onSubmit={handleAddProduct} />}
        />
        <Route
          path="/edit/:id"
          element={<EditProduct onSubmit={handleEditProduct} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
