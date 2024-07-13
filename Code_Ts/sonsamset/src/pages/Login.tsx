import React from "react";
import { useForm } from "react-hook-form";
// import { Product } from "../interfaces/Product";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { User } from "../interfaces/User";
import { useNavigate } from "react-router-dom";
import instaince from "../apis";

const userSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(6),
});

const Login = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: joiResolver(userSchema),
  });
  const onSubmit = (user: User) => {
    console.log(user);
    // (async () => {
    //   const { data } = await instaince.post(`/register`, user);
    //   console.log(data);
    // })();
    (async () => {
      const { data } = await instaince.post(`/login`, user);
      console.log(data);
      if (data.user) {
        sessionStorage.setItem("accessToken", data.accessToken);
        const isConfirm = confirm("Login successfully, switch home page?");
        if (isConfirm) {
          nav(`/`);
        }
      }
    })();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="">email</label>
          <input
            className="form-control"
            type="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <div className="text-danger">{errors.email.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="">password</label>
          <input
            className="form-control"
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && (
            <div className="text-danger">{errors.password.message}</div>
          )}
        </div>

        <div className="form-group">
          <button className="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
