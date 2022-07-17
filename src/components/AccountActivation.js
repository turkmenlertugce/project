import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

const AccountActivation = () => {

    const location = useLocation();
   

    const navigation = useNavigate();

    const [userr , setUserr] = useState([])
    useEffect(() => {
        setUserr(JSON.parse(localStorage.getItem("user")));
        console.log(userr);
    }, [])

    const activate = useCallback(async () => {
        axios.post(`https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/activate_account/confirm?token=${location.pathname.substring(19)}`).
        then(res => {
            console.log(res.data);
            navigation("/");
        }).catch(err => {
            console.log(err);

        })
    },[userr]);

    
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
        <div>
                <h2>Activated</h2>
                <p></p>
            </div>
    </div>
  )
}

export default AccountActivation
