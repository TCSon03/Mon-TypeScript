// import React from "react";

import { Link } from "react-router-dom";
import { Product } from "../interfaces/Product";

type Props = {
  products: Product[];
  onDel: (id: number) => void;
};

const Home = ({ products, onDel }: Props) => {
  // console.log(products);
  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img src={item.thumbnail} alt="" />
              </td>

              <td>{item.description}</td>
              <td>
                <Link to={`/edit/${item.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button
                  onClick={() => onDel(Number(item.id))}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
