import React from 'react'

const WantSurvery = ({ setCorpSignInForm, setLoginSuccess, setWantSurvey, setIsBuisnessOwner }) => {

    const yesToSurvey = () => {
        setWantSurvey(false);
        setCorpSignInForm(true);
    }
    const noToSurvey = () => {
        setWantSurvey(false);
        setCorpSignInForm(false);
        alert("We'll contact you soon");
        setIsBuisnessOwner(true);
        setLoginSuccess(false);
    }
    return (
        <div className=' wiz'>
            <h1>Interested in taking a survey?</h1>
            <div className='button'>
                <button onClick={noToSurvey} >No</button>
                <button id='yes' onClick={yesToSurvey} >Yes</button>
            </div>
        </div>
    )
}

export default WantSurvery
