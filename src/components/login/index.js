import React, { useState, useContext } from 'react'
import './style.css'

function Login(){
    const [email, setEmail] = useState()
    const [password,setPassord] = useState()
    
    const handleEmail = (e)=>{
        setEmail(e.target.value)
        console.log(email)
    }

    const handlePassword = (e)=>{
        setPassord(e.target.value)
        console.log(password)
    }

    const submit = (e)=>{
        e.preventDefault()
    }

    return (
        <div className="login">
            <div className="login__content">
                <p className="login__topLabel">Welcome</p>
                <h3 className="top__heading">Sign-in</h3>
                <form onSubmit={submit}>
                    <div className="formControl inputControl">
                        <input type="email" onChange={handleEmail} name="emailID" placeholder="email" required />
                    </div>
                    <div className="formControl inputControl">
                        <input type="password" onChange={handlePassword} name="Password" placeholder="password" required />
                    </div>
                    <div className="formControl">
                        <button type="submit" value="Sign-in" >Sign-in</button>
                    </div>
                </form>
                <div className="socialIcons">
                    <a href="http://google.com/" target="_blank" rel="noreferrer">
                        <div className="socialIcon google__icon"></div>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="middle__icon">
                        <div className="socialIcon twitter__icon"></div>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <div className="socialIcon fb__icon"></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login