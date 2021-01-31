import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function Account(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect = props.location.search 
        ? props.location.search.split("=")[1] 
        : "/";

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signin(email, password))
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
                <h1>Login</h1>
            </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}


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
                <button 
                    className="formbutton" 
                    type="submit"
                    >Sign In
                </button>
            </div>
            <Link to={`/register?redirect=${redirect}`}><h3>Register</h3></Link>
            <Link to="/"><h3>Return to Store</h3></Link>
            <Link to="/forgotpassword"><h3>Forgot your password?</h3></Link>
        </form>
    </div>    
    )
}
