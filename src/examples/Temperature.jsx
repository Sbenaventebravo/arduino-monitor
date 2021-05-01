import React, {useState} from 'react';

const Temperature = () => {
    const [temperature, setTemperature] = useState(20);

    const Add = () => {
        setTemperature(temperature + 1);
    }
    const Minus = () => {
        if (temperature > 0) {
            setTemperature(temperature - 1);
        }
    }

    const Reset = () => {
        setTemperature(20);
    }
    
    return (
        <div className="center">
            <h2>La temperatura es de: {temperature}°</h2>
            <h2>
            {
                temperature > 20 ? "hace calor" : "hace frio"
            }
            </h2>
            <button onClick={Add} className="btn btn-success mr-4">+</button>
            <button onClick={Minus} className="btn btn-danger mr-4">-</button>
            <button onClick={Reset} className="btn btn-info">Reset</button>
        </div>
    );
}

export default Temperature;