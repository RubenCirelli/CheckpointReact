import { useState } from "react";

export function Form(){
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    function handleInputChange(event){
        const {value, type, checked, name } = event.target;
        setData({
            ...data,
            [name]: type === "checked" ? checked : value
        })
    }

    const [array, setArray] = useState([])

    function handleSubmit(event){
        event.preventDefault()
        setArray([...array, data])
        handleFormReset()

    }

    function handleFormReset(){
        setData({username:"", password:""})

    }

    return(
      <form onSubmit={handleSubmit}>
          <input name="username" type="text" value={data.user} onChange={handleInputChange} placeholder="Username"/>

          <input style={{border:data.password.length < 12 ? "1px solid red" : "1px solid black" }} name="password" type="password" value={data.password}
            onChange={handleInputChange} placeholder="Password" disabled={data.username.length < 3}/>

          <button type="submit" disabled={data.password.length < 12}>Submit</button>

          <button onClick={handleFormReset} disabled={!data.username}>Reset</button>

      <ul>
        { array.map((element, index) => (
          <div key={index}>
            <li>{element.username}</li>
            <li>{element.password}</li>
          </div>
        ))}
      </ul>

    </form>
    )
}
