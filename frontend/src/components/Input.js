import React from 'react';
import "../index.css"
export default function Input  (props)  {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                {props.name}
            </label>
            <input name={props.inputTextName} type="text"/>
            <input type ="submit" value="Rechercher"/>
        </form>
    );
};
