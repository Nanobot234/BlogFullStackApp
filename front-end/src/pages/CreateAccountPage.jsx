import { useNavigate, Link} from "react-router-dom";
import { useState, } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function CreateAccountPage() {
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [confirmPassword, setConfirmPassword] = useState('');
       const [error, setError] = useState(''); //the error from passswords not matching
    
       const navigate = useNavigate();;

         async function createAccount() {
            if(password !== confirmPassword) {
               setError('Passwords do not match');
               return;
            }

            try {
               await createUserWithEmailAndPassword(getAuth(), email, password);
               navigate('/articles')
            } catch (e) {
               setError(e.message);
            }
         }

     
        return (
         <>
         <h1>Create Account</h1>
         {error && <p>{error}</p>} {/* //this will display the error message */}
         <input
         placeholder='Your email adress'
         value={email}
          onChange={emailValue => setEmail(emailValue.target.value)} />
          <input
          placeholder='Your password'
          type='password'
          value={password} //this sets the stateVariable for the password
          onChange = {passwordValue => setPassword(passwordValue.target.value)} />
          <input 
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)} />
          <button onClick={createAccount}>Create Account</button>
          <Link to={'/login'}>Already Have an Account? Log In</Link>
     
         </>
        );   
       }
   