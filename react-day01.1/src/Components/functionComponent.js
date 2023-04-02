import React, { useState } from 'react';

function FunctionComponent() {
    const [counter, setCounter] = useState(0);
    return (

        <>
            <h1>this the function component </h1>
            <p>My current state of counter is:{counter}</p>
            <button className='btn' onClick={() => { setCounter(counter + 1) }}>this is add</button>
        </>

    )
}

export default FunctionComponent;
