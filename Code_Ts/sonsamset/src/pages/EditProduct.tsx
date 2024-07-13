import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Product } from "../interfaces/Product";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useParams } from "react-router-dom";
import instaince from "../apis";
type Props = {
  onSubmit: (product: Product) => void;
};

const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().required(),
});

const EditProduct = ({ onSubmit }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await instaince.get(`/products/${id}`);
      setProduct(data);
    })();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: joiResolver(productSchema),
  });

  const onEdit = (product: Product) => {
    onSubmit({ ...product, id });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onEdit)}>
        <h1>Edit Product</h1>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            className="form-control"
            type="text"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
            defaultValue={product?.title}
          />
          {errors.title && (
            <div className="text-danger">{errors.title.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="">price</label>
          <input
            className="form-control"
            type="text"
            {...register("price", {
              required: true,
              min: 0,
            })}
            defaultValue={product?.price}
          />
          {errors.price && (
            <div className="text-danger">{errors.price.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="">description</label>
          <input
            className="form-control"
            type="text"
            {...register("description", {
              required: true,
            })}
            defaultValue={product?.description}
          />
          {errors.description && (
            <div className="text-danger">{errors.description.message}</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
