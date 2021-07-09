import React from 'react'

const Contacted = ({ setMustContact, setContacted, setSmallSignInForm }) => {
    const yesToContact = () => {
        setContacted(false);
        setMustContact(true);
    }
    const noToContact = () => {
        setSmallSignInForm(true);
        setContacted(false);
    }
    return (
        <div className=' wiz'>
            <h1>Contacted with Large Corporation?</h1>
            <div className='button'>
                <button onClick={noToContact} >No</button>
                <button id='yes' onClick={yesToContact} >Yes</button>
            </div>
        </div>
    )
}

export default Contacted
