import axios from "axios"
import { useState } from 'react'
import Link from 'next/link'
function LoginForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userNameInput = (e) => {
        setUsername(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    const submit =  async () => {
        const user = axios.post('http://127.0.0.1:8000/api/token',{
            "username":username,
            "password":password
        })
        const res = await user
        localStorage.setItem('token',res.data.access)

    }
    return (
        <>
            <div className="col">
                <input onChange={userNameInput} type="text" className="form-control text-light" placeholder="User name" value={username} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={passwordInput} type="password" className="form-control text-light" id="exampleInputPassword1" placeholder="Password" value={password} />
                <Link onClick={submit} href='/profile'><button  type="button" className="btn btn-primary">Submit</button></Link>
            </div>
        </>
    )
}

export default LoginForm