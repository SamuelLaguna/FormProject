import { useRef, useState } from "react"


const UseStateVsUseRef = () => {
    //UseState
    const [count, setCount] = useState(0)

    //UseRef
    const countRef = useRef(0)

    //Create Helper funciton to handle my increament

    const handleIncreament = () => {
        setCount(prevCount => prevCount + 1);
        countRef.current++;
        console.log('From UseState', count)
        console.log(countRef.current);
    }
  return (
   <>
   <h1 className="class-center">UseState Vs UseRef</h1>
   <button onClick={handleIncreament} className="btn btn-primary">Increament</button>
   <div>
    <span>Spam Counter UseState: {count}</span>
   </div>
   <div>
    <span>Counter From UseRef: {countRef.current}</span>
   </div>
   </>
  )
}

export default UseStateVsUseRef