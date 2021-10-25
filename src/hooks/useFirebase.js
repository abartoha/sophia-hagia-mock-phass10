import { useEffect, useState } from "react";
// import { useNavigate } from "@reach/router";
import { getAuth, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import InitializeAuthentication from "../Firebase/firebase.initialize";

//  Firebase Initlialization
InitializeAuthentication();

//  Providers must go inside useFirebase

const useFirebase = () => {
    const [services, setServices] = useState([]);
    // const [service, setService] = useState('');

    useEffect( () => {
        fetch(process.env.PUBLIC_URL+"/services.json")
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    })
    //===================================================
    //        password regular expression - deploy
    //===================================================
    // Requirements
    // 1. Atleast 1 Uppercase Letter
    // 2. Atleast 1 Lowercase Letter
    // 3. Atleast 1 Decimal Digit 
    // 4. Atleast 8 chars and at most 32 chars
    //
    // because \d in regExp means any decimal digit
    // eslint-disable-next-line
    const regStrong = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,32}$");
    // const regStrong = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$");
    //===================================================
    //        password regular expression - test
    //===================================================
    // because \d in regExp means any decimal digit
    // eslint-disable-next-line
    const reg = new RegExp("^[A-Za-z\d@$!%*?&]{6,32}$");
    //  Failed venture!
    //  const navigate = useNavigate();
    //  const goHome = () => navigate('/');
    const goHome = () => window.location.href = "/";
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleLogin = (loginEmail, loginPassword) => {
        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((result) => {
                setError("");
            })
            .catch((err) => {
                // alert(err);
                setError(err.message);
            })
    }

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setError("");
                goHome();
                // window.location.replace("http://localhost:3000");
            })
            .catch((err) => {
                setError(err);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // console.log(user);
            if (user) {
                setUser(user);
                setIsLoggedIn(true);
                console.log(isLoggedIn);
                // console.log(user.providerId);
            }
        })
    });

    const handleLogOut = () => {
        signOut(auth)
            .then((result) => {
                console.log(result);
                setUser({});
                setIsLoggedIn(false);
                setError("");
                goHome();
            }).catch((err) => {
                setError(err.message);
            });
    };

    const resetPassword = (resetEmail) => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
                alert("Verification Email Sent, check your email, Pronto!");
                // setResetError(<div className="text-success mb-3">Check the mail</div>);
                setError("");
                goHome();
            })
            .catch((err) => {
                alert(`${err}`);
                setError(err.message);
                // setResetError(<div className="text-danger mb-3">{err.message}</div>);
            });
    }

    const newRegistration = (newEmail, newPass, newName) => {
        createUserWithEmailAndPassword(auth, newEmail, newPass)
            .then((userCredential) => {
                setError("");
                sendEmailVerification(auth.currentUser)
                    .then((result) => {
                        setError("");
                    })
                    .catch((err) => {
                        alert(`${err}`);
                        setError(err.message);
                    })
                updateProfile(auth.currentUser, { displayName: newName })
                    .then((result) => {
                        setError("");
                        goHome();
                    })
                    .catch((err) => {
                        setError(err.message);
                    })
            })
            .catch((err) => {
                alert(`${err}`);
                setError(err.message);
            })
    }

    return {
        user,
        error,
        reg,
        regStrong,
        signInUsingGoogle,
        handleLogOut,
        resetPassword,
        newRegistration,
        handleLogin,
        services,
        isLoggedIn
    }

}

export default useFirebase;