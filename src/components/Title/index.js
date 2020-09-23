import React from "react";
import "./style.css";

const Title = (props) => {

    return (

        <div id='employeeDir'>
            <h1 className='title'>{props.children}</h1>
        </div>

    );

}

export default Title;