import React, { useState } from 'react';
import EditableListItem from './EditableListItem'
import '../styles/EditableShoppingList.scss'
import '../styles/EditableListItem.scss'

export default function EditableShoppingList(props) {
  const { editable } = props;

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="EditableShoppingList">
      <div className="title"> ShoppingList: </div>
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
            return <div className="EditableListItem" key={i}>
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

      <div className="addItem">
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
