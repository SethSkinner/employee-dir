import React from "react";
import './style.css';

function Card(props) {

    return (

        <div className='card'>
            <div className='image-container'>
                <img src={props.employee} alt={props.name}/>
            </div>
        </div>

    );

}

export default Card;