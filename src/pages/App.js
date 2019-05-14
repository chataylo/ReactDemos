import React from 'react';
import logo from '../images/logo.svg';
import '../style/App.css';
import EditableShoppingList from '../components/EditableShoppingList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EditableShoppingList />
      </header>
    </div>
  );
}

export default App;
