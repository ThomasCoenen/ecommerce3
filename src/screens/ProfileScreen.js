import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo} = userSignin;

    const userDetails = useSelector((state) => state.userDetails)
    const {loading, error, user} = userDetails;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {
        success: successUpdate, 
        error: errorUpdate, 
        loading: loadingUpdate
    } = userUpdateProfile;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {    
            dispatch({type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id))
        } else {
            setFirstname(user.firstname);
            setLastname(user.lastname);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            alert('Password and confirm password do not match')
        } else {
            dispatch(updateUserProfile({userId: user._id, firstname, lastname, email, password,}))
        }
    }

    return (
        <div>
            {
                loading ? (<LoadingBox></LoadingBox>) 
                :
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                : 
                
                (
                <form className="form" onSubmit={submitHandler}>
                    <div><h1>User Profile</h1></div>

                    {loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && (<MessageBox variant="danger">{errorUpdate}</MessageBox>)}
                    {successUpdate && (<MessageBox variant="success">Profile Updated Successully</MessageBox>)}

                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input className="forminput" id="firstname" type="text" placeholder="Enter First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input className="forminput" id="lastname" type="text" placeholder="Enter Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="forminput" id="email" type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="forminput" id="password" type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input className="forminput" id="confirmPassword" type="confirmPassword" placeholder="Enter confirm password" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>

                    <div>
                        <label/>
                        <button className="formbutton" type="submit">Update</button>
                    </div>
                </form>
                )
            }

        </div>
    )
}
