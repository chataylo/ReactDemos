import React, { useState } from 'react';

export default function ButtonCounter() {

  // useState is a Hook.  It is a function called inside
  // a component that adds some local state.
  // this function returns a pair: the current value,
  // and a function for changing the value.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
