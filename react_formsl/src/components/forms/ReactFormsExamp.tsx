import {FieldValues, useForm} from "React-hook-form"

const ReactFormsExamp = () => {
    const {register, handleSubmit} = useForm()
    console.log(register('name'));

    const onHelpSubmit = (data:FieldValues) => {
        console.log(data);
    }
  return (
    <>
     <h1 className="text-center">component using React Hook</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb -3 myContainer">
          <label htmlFor="" className="label">Name</label>
          <input {...register('name')} id="name" type="text" className="form-control" />
          <label htmlFor="" className="label">Age</label>
          <input {...register('age')} id="age" type="number" className="form-control" />
        <button className="btn btn-primary" type="submit" >Submit</button>
        </div>

      </form>
    </>
  )
}

export default ReactFormsExamp