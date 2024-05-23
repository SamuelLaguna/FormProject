import { FormEvent, useRef } from "react"


const FormUseRef = () => {

    //Create a useRef
    const nameRef = useRef<HTMLInputElement>(null)

    const ageRef = useRef<HTMLInputElement>(null);

    const person = {
        name: '',
        age:0
    }

    const handleClick = (e:FormEvent) => {
        e.preventDefault()
        console.log("Submit with our handleClick function")
        if(nameRef.current != null)
        // console.log(nameRef.current.value);
        person.name = nameRef.current.value
        if(ageRef.current != null)
            // console.log(ageRef.current.value)
            person.age = parseInt(ageRef.current.value)
            console.log(person)
    }
  return (
   <>
    <h1 className="text-center">component using useState</h1>
      <form onSubmit={handleClick}>
        <div className="mb -3 myContainer">
          <label htmlFor="" className="label">Name</label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
          <label htmlFor="" className="label">Age</label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        <button  className="btn btn-primary" type="submit" >Submit</button>
        </div>

      </form>
   </>
  )
}

export default FormUseRef