import React, {useState} from 'react';

const ComponentOne = () => {
    const [number, setNumber] = useState(0);

    const Add = () => {
        setNumber(number + 1);
    }
    const Minus = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    }

    const Reset = () => {
        setNumber(0);
    }
    return (
        <div className="center">
            <h2>Numero de clicks: {number}</h2>
            <button onClick={Add} className="btn btn-success mr-4">+</button>
            <button onClick={Minus} className="btn btn-danger mr-4">-</button>
            <button onClick={Reset} className="btn btn-info">Reset</button>
        </div>
    );
}

export default ComponentOne;