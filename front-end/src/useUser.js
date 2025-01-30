import { useState, useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => { //this is a listener that listens for changes in the user
            setUser(user); //this sets the user state variable
            setIsLoading(false); //this sets the isLoading state variable   
        });

        return unsubscribe
    }, []); //empty array means it only runs once

    return {isLoading, user};
}

export default useUser; //this exports the useUser function