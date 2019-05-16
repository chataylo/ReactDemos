import React, { useState, useEffect } from 'react';

export default function useFacebookLogin( tryLogin ){

  const [ profileInfo, setProfileInfo ] = useState(false);
  const [ isPromptOpen, setIsPromptOpen ] = useState(false);

  function promptLogin(){
    setIsPromptOpen(true);
    window.FB.login((response) => {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', (response) => {
          setProfileInfo(response);
          setIsPromptOpen(false);
        });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  if(tryLogin && !isPromptOpen && !profileInfo) promptLogin();

  return [ profileInfo, promptLogin ]
}
