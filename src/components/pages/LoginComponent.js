import React, { useEffect, useState } from 'react';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
    apiKey: "AIzaSyC_dpp33fW0GBMyuvBGc0Udqk4MLgtOZJo",
    authDomain: "wizard-base-e81c6.firebaseapp.com"
})

const LoginComponent = ({ setOwnLargeCorp, setLoginSuccess, setGitLogin, gitLogin, googleLogin, setGoogleLogin }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        })
    })
    if (isSignedIn === true) {
        setLoginSuccess(true);
        setGitLogin(false);
        setGoogleLogin(false);
    }

    return (
        <div className="App">
            {isSignedIn ? (
                <span>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    <h4>Hello {firebase.auth().currentUser.displayName}</h4>
                </span>
            ) : (
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            )}
        </div>
    )
}
export default LoginComponent;
