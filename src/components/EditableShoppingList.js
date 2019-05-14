import React, { useState } from 'react';

export default function ShoppingList() {

  const [text, setText] = useState("Enter TODO");
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState(-1);
  const [editText, setEditText] = useState("");

  return (
    <div className="ShoppingList">
      <b> ShoppingList: </b> <br/>
      {
        list.map((item, i) => {
          if(i != editing){
            return (
              <div className="listItem">
                <p key={i}> {item} </p>
                <button onClick={()=>{
                    setEditing(i);
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
                    setEditing(-1);
                    list.splice(editing, 1, editText);
                    setList(list);
                }}>
                  Save
                </button>
                <button onClick={()=> {
                    setEditing(-1);
                }}>
                  Cancel
                </button>
              </div>
            )
          }
        })
      }

      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
      />

      <button onClick={() => setList(list.concat(text))}>
        Add
      </button>

    </div>
  );
}
