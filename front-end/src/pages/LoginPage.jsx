import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default function LoginPage() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');

   const navigate = useNavigate();
   
   async function login() {
      try {
         await signInWithEmailAndPassword(getAuth(), email, password);
         navigate('/articles')
      } catch (e) {
         setError(e.message);
      }
   }
    return (
     <>
     <h1>Log In</h1>
     <input
     placeholder='Your email adress'
     value={email}
      onChange={emailValue => setEmail(emailValue.target.value)} />
      <input
      placeholder='Your password'
      type='password'
      value={password} //this sets the stateVariable for the password
      onChange = {passwordValue => setPassword(passwordValue.target.value)} />
      <button onClick={login}>Log In</button>
      <Link to={'/create-account'}>Dont have an account create ne here</Link>
   {/* continue here for button */}
     </>
    );   
   }