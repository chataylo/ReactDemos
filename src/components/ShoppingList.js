import React, { useState } from 'react';

export default function ShoppingList() {

  const [text, setText] = useState("Enter TODO");
  const [list, setList] = useState([]);

  return (
    <div className="ShoppingList">
      <b> ShoppingList: </b> <br/>
      {
        list.map((item, i) =>
          <div className="listItem">
            <p key={i}> {item} </p>
          </div>
        )
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
