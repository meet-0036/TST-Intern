import { useState } from 'react';

export default function Sample() {

    const [inputColor, setInputColor] = useState('white');
    const [color, setColor] = useState('White');

    function changeInputValue(event) {  // event comes with input's onChange event
        setInputColor(event.target.value);
    }    

    function handleChange() {
        setColor(inputColor);
    }

    return (
        <>
        <input type="text" value = {inputColor} onChange = {changeInputValue} placeholder = 'Write color name'/>
        <h1 style = {{color : color}} >Changable Property!!!</h1>
        <button onClick = {handleChange}> {inputColor}</button>
        </>
    );
}