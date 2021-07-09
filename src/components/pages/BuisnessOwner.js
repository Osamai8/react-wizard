import React from 'react'

const BuisnessOwner = ({ setIsLocatedInUS, setIsBuisnessOwner, setLogin }) => {

    const yesToBuisness = () => {
        setIsBuisnessOwner(false);
        setIsLocatedInUS(true);
    };
    const noToBuisness = () => {
        setIsBuisnessOwner(false);
        setLogin(true);
    }

    return (
        <div className=' wiz'>
            <h1>Are you a Buisness Owner?</h1>
            <div className='button'>
                <button onClick={noToBuisness} >No</button>
                <button id='yes' onClick={yesToBuisness} >Yes</button>
            </div>

        </div>
    )
}

export default BuisnessOwner
