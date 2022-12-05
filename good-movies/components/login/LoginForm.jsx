import axios from "axios"
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function LoginForm() {
    const router = useRouter();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userNameInput = (e) => {
        setUsername(e.target.value)
    }
    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    const submit = async (e) => {

        if (username == "") {
            alert('please enter username')
        }else if(password == ""){
            alert('please enter password')
        }
        
        else {
            try{
                const user = axios.post('http://127.0.0.1:8000/api/token', {
                    "username": username,
                    "password": password
                })
                const res = await user
                localStorage.setItem('token', res.data.access)
            } catch {
                alert('wrong username or password')
            }
        }
    }
    return (
        <form>

            <div className=' container d-flex flex-column justify-content-center gap-3  p-3 rounded bg-primary' >
                <input onChange={userNameInput} type="text" className="form-control bg-light" placeholder="User name" value={username} />
                <input onChange={passwordInput} type="password" className="form-control bg-light" id="exampleInputPassword1" placeholder="Password" value={password} />
                <Link href='/profile'><Button type='submit'onClick={submit} color="primary" variant="contained">Login</Button></Link>

                <Typography color='secondary'>No account?</Typography>
                <Button type='submit' color="success" variant="contained"><Link style={{ textDecoration: 'none' }} href='/register'><Typography color='secondary'>GET STARTED — ITS FREE!</Typography></Link></Button>

            </div>


        </form>
    )
}

export default LoginForm