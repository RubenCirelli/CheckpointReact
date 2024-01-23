import { useState } from "react";

export function Form(){
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    function handleInputChange(event){
        const {value,type, checked, name } = event.target;
        setData({
            ...data,
            [name]: type === "checked" ? checked : value
        })
    }

    const {array, setArray} = useState([])

    function handleSubmit(event){
        event.preventDefault()
        console.log(data);
        setArray([...data, array])
        handleFormReset()

    }

    function handleFormReset(){
        setData({username:"",password:""})

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={data.username}  placeholder="username" onChange={handleInputChange} />
            <input type="password"  name="password" value={data.password}  placeholder="password" onChange={handleInputChange} disabled={data.username.length < 8}/>
            <button type="submit" onClick={handleInputChange} >Login </button>
            <button type="submit" onClick={handleFormReset}>Reset</button>
        </form>
    )
}