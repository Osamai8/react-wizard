import React from 'react'

const Login = ({ setGoogleLogin, setLogin, setIsBuisnessOwner, setGitLogin }) => {
    const yesToFb = () => {
        setIsBuisnessOwner(false);
        setLogin(false);
        setGitLogin(true);
    }
    const noToFb = () => {
        setLogin(false);
        setGoogleLogin(true);
    }
    return (
        <div className=' wiz'>
            <h1>Do you want to login with Github?</h1>
            <div className='button'>
                <button onClick={noToFb} >No</button>
                <button id='yes' onClick={yesToFb} >Yes</button>
            </div>

        </div>
    )
}

export default Login
