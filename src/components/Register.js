import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'
import { Link } from 'react-router-dom'

export default function Register(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const redirect = props.location.search 
        ? props.location.search.split("=")[1] 
        : "/";

    const userRegister = useSelector((state) => state.userRegister)
    const { userInfo, loading, error } = userRegister;
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault() 
        if(password !== confirmPassword) {
            alert('Passwords do not match')
        } else {
            dispatch(register(firstname, lastname, email, password))
        }
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo])

    return (
    <div>
        <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Register</h1>
            </div>
            <div>
                    <label htmlFor="firstname"></label>
                    <input 
                        className="forminput"
                        type="text" 
                        id="firstname" 
                        placeholder="First Name"
                        required
                        onChange={e => setFirstName(e.target.value)}>
                    </input>
                </div> 
                <div>
                    <label htmlFor="lastname"></label>
                    <input 
                        className="forminput"
                        type="text" 
                        id="lastname" 
                        placeholder="Last Name"
                        required
                        onChange={e => setLastName(e.target.value)}>
                    </input>
                </div> 

                <div>
                    <label htmlFor="email"></label>
                    <input 
                        className="forminput"
                        type="email" 
                        id="email" 
                        placeholder="Enter email"
                        required
                        onChange={e => setEmail(e.target.value)}>
                    </input>
                </div> 
                <div>
                    <label htmlFor="password"></label>
                    <input 
                        className="forminput"
                        type="password" 
                        id="password" 
                        placeholder="Enter password"
                        required
                        onChange={e => setPassword(e.target.value)}>
                    </input>
                </div> 
                <div>
                    <label htmlFor="confirmPassword"></label>
                    <input 
                        className="forminput"
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Enter Confirm Password"
                        required
                        onChange={e => setConfirmPassword(e.target.value)}>
                    </input>
                </div> 
                <div>
                    <button 
                        className="formbutton" 
                        type="submit"
                        >Create
                    </button>
            </div>
            <Link to={`/account?redirect=${redirect}`}><h3>Sign In</h3></Link>
            <Link to="/"><h3>Return to Store</h3></Link>
            <Link to="/forgotpassword"><h3>Forgot your password?</h3></Link>
        </form>
    </div>
    )
}
