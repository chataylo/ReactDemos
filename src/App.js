import React from 'react';
import './styles/App.scss';
import FacebookLoginPage from './pages/FacebookLoginPage.js'

function App() {
  let darkTheme = true;

  return (
    <div className={(darkTheme? "darkPage": "lightPage")}>
      <FacebookLoginPage />
    </div>
  );
}

export default App;
