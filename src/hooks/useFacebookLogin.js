import React, { useState, useEffect } from 'react';

export default function useFacebookLogin( tryLogin ){

  const [ profileInfo, setProfileInfo ] = useState(false);
  const [ promptOpen, setPromptOpen ] = useState(false);

  function promptLogin(){
    setPromptOpen(true);
    window.FB.login((response) => {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', (response) => {
          setProfileInfo(response);
          setPromptOpen(false);
        });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  if(tryLogin && !promptOpen && !profileInfo) promptLogin();

  return [ profileInfo, promptLogin ]
}
