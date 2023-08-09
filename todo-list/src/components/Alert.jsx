import React, { useEffect } from 'react';

const Alert = ({ actionTaken, alertMsg }) => {
    return (
        <div
            className={`alert-msg-container alert-msg-container-${
                actionTaken ? 'visible' : 'invisible'
            }`}
        >
            <p>{alertMsg}</p>
        </div>
    );
};

export default Alert;
