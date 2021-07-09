import React from 'react'

const LocatedInUS = ({ setIsLocatedInUS, setOwnLargeCorp }) => {
    const inUS = () => {
        setIsLocatedInUS(false);
        setOwnLargeCorp(true);
    }

    const notInUS = () => {
        alert('Access denied for non US residential. First become a citizen to get permission.');
        window.location.reload();
    }
    return (
        <div className=' wiz'>
            <h1>Are you located in US?</h1>
            <div className='button'>
                <button onClick={notInUS} >No</button>
                <button id='yes' onClick={inUS} >Yes</button>
            </div>
        </div>
    )
}

export default LocatedInUS
