import { useState } from 'react';

export default function Player({initialName, symbol, isActive , onChangeName}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing , setIsEditing ] = useState(false);

    function handleEditClick(){
        setIsEditing(editing => !editing);  

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {  
        setPlayerName(event.target.value);
    }

  return (
    <li className = {isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? <input type = 'text' value = {playerName} onChange = {handleChange} required/> : <span className="player-name">{playerName}</span> }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick = {handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}


/*

onChange will trigger for every keystroke and it will provide Event Object with updated/stored component values

 1 - setIsEditing(!isEditing); => Convert true <-> False is right way but React told is not preferable.

 2 - setIsEditing(editing => !editing); =>Pass a function to your state updating function , This function is automatically be called by React
     and will receive the guaranteed latest state value.

When we try this : 

    setIsEditing(!isEditing);  => schedule a sta update to true   
    setIsEditing(!isEditing);  => schedule a sta update to true

each line get inital state

    setIsEditing(editing => !editing);  => schedule a sta update to true
    setIsEditing(editing => !editing);  => schedule a sta update to false

That's get updated value

*/