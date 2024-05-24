import {FieldValues, useForm} from "react-hook-form"

const ReactFormsExamp = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    console.log(errors);
    const onHelpSubmit = (data:FieldValues) => {
        console.log(data);
    }
  return (
    <>
     <h1 className="text-center">component using React Hook</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb -3 myContainer">
          <label htmlFor="" className="label">Name</label>
          <input {...register('name', {required: true, minLength: 3})} id="name" type="text" className="form-control" />
          {errors.name?.type === 'required' && <p className="text-danger">The nane field is required</p>}
          {errors.name?.type === 'minLength' ? <p className="text-danger">The nane must be at least 3 charecters long</p>:null}
          <label htmlFor="" className="label">Age</label>
          <input {...register('age',{required:true,minLength : 1})} id="age" type="number" className="form-control" />
          {errors.age?.type === 'required' ? <p>The Name field is required</p>:null}
        <button className="btn btn-primary" type="submit" >Submit</button>
        </div>

      </form>
    </>
  )
}

export default ReactFormsExamp