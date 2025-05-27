import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext,  useState } from "react";
import { auth } from './../Firebase/firebase.init';

export const AuthProvider = createContext(null);
const Provider = ({children}) => {
    const [user,setUser] = useState(null);
    const [laoding,setLoading] = useState(false);
    const createUser = (email,pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const  parcel = {
        user,
        setUser,
        createUser,
    }

    return (
        <AuthProvider.Provider value={parcel}>
        {children}    
        </AuthProvider.Provider >
    );
};

export default Provider;