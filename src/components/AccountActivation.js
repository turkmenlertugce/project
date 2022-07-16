import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

const AccountActivation = () => {
    const [password,setPassword] = useState("")
    const [passwordAgain,setPasswordAgain] = useState("")
    const location = useLocation();
   

    const navigation = useNavigate();

    const [userr , setUserr] = useState([])
    useEffect(() => {
        setUserr(JSON.parse(localStorage.getItem("user")));
        console.log(userr);
    }, [])

    const activate = useCallback(async () => {
        axios.post(`https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/activate_account/confirm?token=${location.pathname.substring(18)}`, {password:password,passwordAgain:passwordAgain}).
        then(res => {
            console.log(res.data);
            navigation("/");
        }).catch(err => {
            console.log(err);

        })
    },[setUserr]);

    
    useEffect(() => {
        activate()
    }, [activate])


    /*const activate = () => {
        axios.post('https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/activate_account/confirm', {password:password,passwordAgain:passwordAgain}).
        then(res => {
            console.log(res.data);
            navigation("/");
        }).catch(err => {
            console.log(err);

        })
    }*/

  return (
    <div>
        <h3>Account Activation</h3>
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
        <button onClick={activate} className="btn.btn-primary btn-block">Activate</button>
    </div>
  )
}

export default AccountActivation