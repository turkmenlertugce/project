import axios from "axios";
import React, { Component, useState } from "react"
import {Navigate, useNavigate} from "react-router-dom"; 

const Register = () => {

    const navigation = useNavigate()

    const [email, setEmail] = useState("");
 

   /* const register = () => {
        const data = {
            email: email
        };
        axios.post('faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/registration', data).then(
            res => {
                console.log(res)
                navigation("/please-verify");
            }
        ).catch(
            err => {
                console.log(err);
// backenddeki linke gitmiyor, hata veriyor. frontendin çalıştığını göstermek için böyle yaptım .  

                navigation("/please-verify");        

// ----------------------------------             
            }
        )
    
    };*/
    const register = (props) => {
        const data = {
            email: email
        };
        axios.post('https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/registration',data
        ).then(
            res => {
                console.log(res)
                navigation("/please-verify");
            }
        ).catch(
            err => {
                console.log(err);
       
            }
        )
    
    };

  return (
    <div>
        <h3>Register</h3>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <button className="btn.btn-primary btn-block" onClick={register}>Register</button>
    </div>
  )
}

export default Register