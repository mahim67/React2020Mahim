import React from 'react';

function Demolist (props){
    return (
        <div className="demo_div ma4 pa4 dib tc">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avater"/>
            <h3>{props.name}</h3>
            <p>{props.work}</p>
        </div>
    )
}

export default Demolist;