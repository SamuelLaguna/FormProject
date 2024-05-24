import { zodResolver } from "@hookform/resolvers/zod";
import {FieldValues, useForm} from "react-hook-form"
import {z} from "zod";


const schema = z.object({
    name: z.string().min(3),
    age: z.number().min(21)
})

type FormData = z.infer<typeof schema>

// interface FormData {
//     name:string,
//     age:number
// }
const FormValidationZod = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver:zodResolver(schema)})
    console.log(errors);
    const onHelpSubmit = (data:FieldValues) => {
        console.log(data);
    }
  return (
    <>
    <h1 className="text-center">React Forms using Zod</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb -3 myContainer">
          <label htmlFor="" className="label">Name</label>
          <input {...register('name',)} id="name" type="text" className="form-control" />
          {errors.name && <p className="text-danger">{}</p>}
         
          <label htmlFor="" className="label">Age</label>
          <input {...register('age',)} id="age" type="number" className="form-control" />
          {errors.age? <p>The Name field is required</p>:null}
        <button className="btn btn-primary" type="submit" >Submit</button>
        </div>

      </form>
      </>
  )
}

export default FormValidationZod