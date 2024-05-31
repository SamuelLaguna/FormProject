

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least three characters" }),
  age: z.number({ invalid_type_error: "Age field is required" }).min(21),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Please enter in correct password" }),
});

type FormData = z.infer<typeof schema>;

const MiniChCreateFormZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onHelpSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-center">React Forms using Zods</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb-3 myContainer subFormLayOut subBox">
          <label htmlFor="" className="label">
            Name
          </label>
          <input {...register("name")}id="name" type="text" className="form-control"/>
          {errors.name && <p className="text-danger">{errors.name.message}</p>}

          <label htmlFor="" className="label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age ? <p>{errors.age.message}</p> : null}

          {/* Email */}
          <label htmlFor="" className="label">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="form-control"
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}

          {/* Password */}
          <label htmlFor="" className="label">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="form-control"
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}

          <button disabled={!isValid} className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default MiniChCreateFormZod;
