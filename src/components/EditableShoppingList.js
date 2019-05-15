import React, { useState } from 'react';
import EditableListItem from './EditableListItem'

export default function EditableShoppingList(props) {
  const { editable } = props;

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="shoppingList">
      <b> ShoppingList: </b> <br/>
      {
        list.map((item, i) => {
          if(editable){
            return <EditableListItem
              key={i}
              item={item}
              onConfirm={ newText => {
                let newList = [...list];
                newList.splice(i, 1, newText);
                setList(newList);
              }}
            />
          } else {
            return <div className="listItem" key={i}>
              {item}
            </div>
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
