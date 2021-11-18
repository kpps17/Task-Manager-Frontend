import { useState } from "react";
import axios from 'axios';

const Signup = () => {
    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignUp = () =>{
        try {
            const userData = {name: name, email: email, password: password};
            axios.post('/users', userData).then((res) => {
                console.log(res);
                if(res.data.error) {
                    setMessage('invalid');
                } else {
                    setMessage('valid')
                }
            }).catch(err => setMessage(err.message)); 
            
        } catch (err) {
            console.log(err);
        }
    }
    
    return (  
        <div>
            <h1>Signup Page</h1>
            <div>
                <div>
                    Name
                    <input value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    Email
                    <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    Password
                    <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            </div>
            <button onClick={handleSignUp}>SignUp</button>
            <h2>{message}</h2>
        </div>
    );
}
 
export default Signup;