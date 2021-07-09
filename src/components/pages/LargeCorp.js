import React from 'react'

const LargeCorp = ({ setContacted, setLoginSuccess, setWantSurvey, setOwnLargeCorp }) => {

    const yesToCorp = () => {
        setOwnLargeCorp(false);
        setWantSurvey(true);
        setLoginSuccess(false);
    }
    const noToCorp = () => {
        setOwnLargeCorp(false);
        setContacted(true);
        setLoginSuccess(false);
    }
    return (
        <div className=' wiz'>
            <h1>Owns a Large Corporation?</h1>
            <div className='button'>
                <button onClick={noToCorp} >No</button>
                <button id='yes' onClick={yesToCorp} >Yes</button>
            </div>
        </div>
    )
}

export default LargeCorp
