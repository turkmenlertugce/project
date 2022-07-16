import { useRef, Component, useEffect, useState } from "react";
import {Navigate} from "react-router-dom"; 
import {Link} from "react-router-dom";
import axios from 'axios'


const Login = (props) => {
   

    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            <Navigate to={'/'} />
        }
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(props.user));
    }, [props.user]);

    const login = () => {         
        axios.post('https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/login',{email: email, password: password}
        )
        .then(response => {
           
            setLoggedIn(true)
            props.setUser(response);
            

        } )
        .catch(error => {
            console.log(error);
     

        } )

    };
    /*const login = async (e) => {   
        e.preventDefault();      
        await axios.post('https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/login', {email: email, password: password}, {
            headers: { 'Content-Type': 'application/json' }
            
        }
        )
        .then(res => {
           
            setLoggedIn(true)
            props.setUser(res);
            console.log(res)
            

        } )
        .catch(err => {
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
            
     
        } )

    };*/
    /*const login = async () => {       
       
      
        try {
            const resp = await axios.post('https://faxriboot-env.eba-dincnkef.us-east-1.elasticbeanstalk.com/api/login',{email: email, password: password})
            if(resp.status===200){
                setLoggedIn(true);
                props.setUser(resp);
                
             
            }else {
                console.log('failed');
                setErrMsg('Login Failed');

            }
        } catch (err) {
            // Handle Error Here
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();           
        }

    };*/

    if (loggedIn){       
        return <Navigate to={'/'} />;
    }

  return (
    <div>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h3>Login</h3>
        <div className="form-group">
            <label>Email</label>
            <input type="email"  className="form-control" placeholder="Email"  value={email} 
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <button onClick={login} className="btn.btn-primary btn-block">LOGIN</button>
        <p className="forgot-password text-right">
            <Link to={'/forgot'}>Forgot password?</Link>               
        </p>
    </div>
  )
}

export default Login