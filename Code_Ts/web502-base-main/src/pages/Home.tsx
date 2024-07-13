// import React from "react";

import { Product } from "../interfaces/Product";

type Props = {
  products: Product[];
};

const Home = ({ products }: Props) => {
  console.log(products);
  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Home;
