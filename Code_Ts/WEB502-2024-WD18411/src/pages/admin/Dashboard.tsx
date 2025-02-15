import React from "react";
import { Product } from "../../interfaces/Product";

type Props = {
	products: Product[];
	handleRemove: (id: number) => void;
};

const Dashboard = ({ products, handleRemove }: Props) => {
	return (
		<div>
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
						<th>Thumbnail</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{products.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.description}</td>
							<td>
								<img src={item.thumbnail} alt={item.title} width={100} />
							</td>
							<td>
								<button className="btn btn-warning">Edit</button>
								<button className="btn btn-danger" onClick={() => handleRemove(item.id!)}>
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
