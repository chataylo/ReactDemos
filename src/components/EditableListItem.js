import React, { useState, useEffect } from 'react'

export default function EditableShoppingList( props ){
  const { item, onConfirm } = props;
  const [ isEditing, setIsEditing ] = useState(false);
  const [ editText, setEditText ] = useState("");

  if( !isEditing ){
    return (
      <div className="listItem">
        {item}
        <button onClick={()=>{
          setIsEditing(true);
          setEditText(item);
        }}>
          Edit
        </button>
      </div>
    )
  } else {
    return (
      <div className="listItem">
        <input
          type="text"
          value={editText}
          onChange={event => setEditText(event.target.value)}
        />
        <button onClick={()=> {
          setIsEditing(false);
          onConfirm(editText);
        }}>
          Save
        </button>
        <button onClick={()=> {
          setIsEditing(false);
        }}>
          Cancel
        </button>
      </div>
    )
  }
}
