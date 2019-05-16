import React, { useState, useEffect } from 'react';

export default function useConnectFacebook(){

  const [ isConnected, setIsConnected ] = useState(false);

  function connectToFacebook(){
    let d = document;
    let s = 'script';
    let id = 'facebook-jssdk';
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
    window.fbAsyncInit = () => {
      window.FB.init({
        appId            : '1434644686659630',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.3'
      });
      setIsConnected(true);
    };
  }

  useEffect(() => {
    connectToFacebook();

    // return unConnectToFacebook;
  });

  return isConnected;
}
