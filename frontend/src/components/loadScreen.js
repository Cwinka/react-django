import React from 'react';

export function LoadScreen(props) {
    const addcls = props.addClass;
    return(
        <div className={`centered-wrapper-flex ${addcls ? addcls: ''}`}>
            <div className='loader'>
                <div className="loader__shift"></div>
            </div>
            <div className='loader-message'>Loading...</div>
        </div>
    )
}

export default LoadScreen;