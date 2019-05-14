import React, { useState } from 'react';

// Second example

//
export default function SimpleShoppingList() {

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="shoppingList">
      <b> ShoppingList: </b> <br/>
      {
        list.map((item, i) =>
          <div className="listItem" key={i}>
            {item}
          </div>
        )
      }

      <input
        type="text"
        value={text}
        placeholder="Enter Item"
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
