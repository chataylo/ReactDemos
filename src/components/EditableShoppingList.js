import React, { useState } from 'react';

export default function ShoppingList() {

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  // this is a sign that state should be moved down
  const [editing, setEditing] = useState(-1);
  const [editText, setEditText] = useState("");

  return (
    <div className="shoppingList">
      <b> ShoppingList: </b> <br/>
      {
        list.map((item, i) => {
          if(i != editing){
            return (
              <div className="listItem" key={i}>
                {item}
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
              <div className="listItem" key={i}>
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
        placeholder="Enter TODO"
        value={text}
        onChange={event => setText(event.target.value)}
      />

      <div className="listAdd">
        { text != "" &&
          <button onClick={() => {
            setList(list.concat(text));
            setText("");
          }}>
            Add
          </button>
        }
      </div>

    </div>
  );
}
