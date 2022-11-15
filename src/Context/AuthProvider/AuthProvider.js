import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo)=>{
        return updateProfile(user, userInfo);
    }

    const signOutUser = ()=> {
        return signOut(auth);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setLoading(false)
            return setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    
    const authInfo = {user, loading, createUser, signInUser, signOutUser, updateUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;