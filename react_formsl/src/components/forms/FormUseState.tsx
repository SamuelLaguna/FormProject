import { FormEvent, useState } from "react";

const FormUseState = () => {

    //Need a useState to handle our form, useState needs to handle an object, person object will have name, age
    const [person, setPerson] = useState({
        name: '',
        age: 0
    })

    //Create a helper function to handle out on submit from out form,
                            //FormEvent Helps us later donw the line with errors  
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log(person)
    }
  return (
    <>
      <h1 className="text-center">component using useState</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb -3 myContainer">
          <label htmlFor="" className="label">Name</label>
          <input onChange={(e)=>setPerson({...person,name:e.target.value})} id="name" type="text" className="form-control" />
          <label htmlFor="" className="label">Age</label>
          <input onChange={(e)=> setPerson({...person,age:parseInt(e.target.value)})} id="age" type="number" className="form-control" />
        <button className="btn btn-primary" type="submit" >Submit</button>
        </div>

      </form>
    </>
  );
};

export default FormUseState;
