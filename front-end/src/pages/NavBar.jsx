
import { Link, useNavigate} from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { useState } from "react";
import  useUser from "../useUser";

export default function NavBar() {

    const {isLoading, user} = useUser();
    //const isLoggedIn = true;
    const email = "nbons@gmail.com"

    const navigate = useNavigate();

    // const handleSignOut = () => {
    //     signOut(getAuth());
    //     navigate('/'); 
    // }


    return (
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/articles">Articles</Link>
            </li>

            {isLoading ? <li>Loading...</li> : (
                <>
                    {user && (
                    <li style={{color: 'white'}}>
                        <p>Logged in as {user.email}</p>
                    </li>
                )}
            <li>
                {user ? <button onClick={() => signOut(getAuth())}>Sign Out</button>//need to navigate, and then find out the call back thing!
                : <button onClick={() => navigate('/login')}>Sign In</button>}

            </li>
                </>

            )}
            
        </ul>
        </nav>
    );
    }