import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confromPassword, setConfromPassword] = useState('')
    const [error, setError] = useState('')

    const emailOnBlur = (event) => {
        setEmail(event.target.value)
    }
    const passwordlOnBlur = (event) => {
        setPassword(event.target.value)
    }
    const confromPasswordlOnBlur = (event) => {
        setConfromPassword(event.target.value)
    }
    return (
        <div className='from-container'>
            <h2>Sing Up</h2>
            <form action="">
                <div className='group-container'>
                    <div className="input-group">
                        <label htmlFor="text">Email</label>
                        <input onBlur={emailOnBlur} className='input-type' type="email" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={passwordlOnBlur} className='input-type' type="password" placeholder='Enter your password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="conform-password">Conform Password</label>
                        <input onBlur={confromPasswordlOnBlur} className='input-type' type="password" placeholder='Conform your password' required />
                    </div>
                </div>
                <input className='login_submit_btn' type="submit" value="Sing Up" />
            </form>
            <p className='sing-up-togel'>Already have an account? <Link className='new-ema' to="/Login">Log In</Link></p>
        </div>
    );
};

export default Register;