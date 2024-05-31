import { zodResolver } from "@hookform/resolvers/zod";
import {FieldValues, useForm} from "react-hook-form"
import {z} from "zod";


const schema = z.object({
    name: z.string().min(3, {message: "Name must be at 3 charecters"}),
    age: z.number({invalid_type_error: "age field is required"}).min(21)
})

type FormData = z.infer<typeof schema>


const FormValidationZod = () => {
    const {register, handleSubmit, formState: {errors,isValid}} = useForm<FormData>({resolver:zodResolver(schema)})
    console.log(errors);
    const onHelpSubmit = (data:FieldValues) => {
        console.log(data);
    }
  return (
    <>
    <h1 className="text-center">React Forms using Zod For HomeWork MiniCH#9</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb -3 myContainer">
          <label htmlFor="" className="label">Name</label>
          <input {...register('name',)} id="name" type="text" className="form-control" />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
         
          <label htmlFor="" className="label">Age</label>
          <input {...register('age',{valueAsNumber:true})} id="age" type="number" className="form-control" />
          {errors.age? <p>{errors.age.message}</p>:null}
        <button disabled={!isValid} className="btn btn-primary" type="submit" >Submit</button>
        </div>

      </form>
      </>
  )
}

export default FormValidationZod