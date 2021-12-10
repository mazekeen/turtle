import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, duration}) => {
    useEffect(() => {
        const timeout = setTimeout(() => removeAlert(), duration);
        return () => clearTimeout(timeout)
    });

    return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert;
