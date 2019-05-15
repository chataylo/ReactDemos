import React, { useState, useEffect } from 'react';
import logo from '../images/logo.svg';
import '../styles/ShoppingList.scss';
import useFacebookConnect from '../hooks/useFacebookConnect'
import useFacebookLogin from '../hooks/useFacebookLogin'
import ButtonCounter from '../components/ButtonCounter'
import EditableShoppingList from '../components/EditableShoppingList'

function FriendsListPage() {

  const isConnected = useFacebookConnect();

  const [ profileInfo, promptLogin ] = useFacebookLogin( isConnected );

  return (
    <div className="facebookPage">
      <div className="title">
        Facebook Page
      </div>
      <div className="profile">
        { isConnected && !profileInfo &&
            <button onClick={promptLogin}>
              Login
            </button>
        }
        { profileInfo &&
            <p> Logged in as
              <b> { profileInfo.name } </b>
            </p>
        }
      </div>

      <EditableShoppingList editable={true} />
      <br/>
      <ButtonCounter/>

    </div>
  );
}

export default FriendsListPage;
