import axios from 'axios'
import React, { useEffect, useState,useCallback } from 'react'
import { useNavigate,useLocation} from 'react-router-dom'

const ResetPassword = () => {
    const [password,setPassword] = useState("")
    const [passwordAgain,setPasswordAgain] = useState("")
    
    const location1 = useLocation();
    const token1 = location1.pathname.substring(16);

    const navigation = useNavigate();

    const [userr , setUserr] = useState([])
    
    useEffect(() => {
        setUserr(JSON.parse(localStorage.getItem("user")));
        console.log(userr);
    }, [])

    const confirm = () => {
        axios.post('https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/reset_password/confirm?'+ token1, {password:password,passwordAgain:passwordAgain}).
        then(res => {
            console.log(res.data);
            navigation("/");
        }).catch(err => {
            console.log(err);
           
        })
    };
    

  return (
    <div>
        <h3>Reset Password</h3>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Password Again</label>
            <input type="password" className="form-control" placeholder="Password" value={passwordAgain}
            onChange={e => setPasswordAgain(e.target.value)}/>
        </div>
        <button onClick={confirm} className="btn.btn-primary btn-block">Confirm</button>
    </div>
  )
}

export default ResetPassword
