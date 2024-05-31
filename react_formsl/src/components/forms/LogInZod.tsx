
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" })
});

type FormData = z.infer<typeof schema>;

const LogInZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center">Log In with Zod</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 myContainer loginBox">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            {...register("username")}
            id="username"
            type="text"
            className="form-control"
          />
          {errors.username && <p className="text-danger">{errors.username.message}</p>}

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="form-control"
          />
          {errors.password && <p className="text-danger">{errors.password.message}</p>}

          <button  disabled={!isValid} className="btn btn-danger logInText" type="submit" >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LogInZod;