import React, {Component, useState,useRef,useEffect} from "react";
import axios from 'axios';
import {Navigate, useNavigate} from "react-router-dom"; 


const Forgot = () => {
    const [email, setEmail] = useState("");
    const navigation = useNavigate()

    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();

    useEffect(() => {
        setErrMsg('');
    }, [email])

    const forget = (props) => {

        const data = {
            email : email
        };
        axios.post('https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/forgot_password', data).then(
            res => {
                console.log(res)
                navigation("/please-verify");


            }
        ).catch(
            err => {
                console.log(err);
                
                if (!err?.response) {
                    setErrMsg('No Server Response');
                } else if (err.response?.status === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (err.response?.status === 401) {
                    setErrMsg('You are not a member');
                } else {
                    setErrMsg('Login Failed');
                }
                errRef.current.focus();
                
        
            }
        )
    };
  return (
    <div>
         <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h3>Forgot Password</h3>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email"
            onChange={e =>setEmail(e.target.value)}/>
        </div>
        <button onClick={forget} className="btn.btn-primary btn-block">Submit</button>
    </div>
  )
}

export default Forgot