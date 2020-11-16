import React, {useState} from 'react'
import './style.css'
import {Link } from 'react-router-dom'

function Signup(){
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

    const register = (e)=>{
        e.preventDefault()
    }

    return (
        <div className="signup">
            <div className="signup__content">
                <h3 className="top__heading">Register</h3>
                <form onSubmit={register}>
                    <div className="formControl inputControl">
                        <input type="email" onChange={handleEmail} name="emailID" placeholder="email" required />
                    </div>
                    <div className="formControl inputControl">
                        <input type="password" onChange={handlePassword} name="Password" placeholder="password" required />
                    </div>
                    <div className="formControl">
                        <button type="submit" value="Sign-up" >Sign-up</button>
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
                <Link to="/login" className="bottom__heading">Sign-in</Link>
            </div>
        </div>
    )
}

export default Signup