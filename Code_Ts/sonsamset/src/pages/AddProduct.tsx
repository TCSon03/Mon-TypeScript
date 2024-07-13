import React from "react";
import { useForm } from "react-hook-form";
import { Product } from "../interfaces/Product";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
type Props = {
  onSubmit: (product: Product) => void;
};

const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().required(),
});

const AddProduct = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: joiResolver(productSchema),
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add Product</h1>
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

export default AddProduct;
