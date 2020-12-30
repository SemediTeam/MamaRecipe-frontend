import React from 'react'
import { Route,Redirect } from 'react-router-dom';
const otp = localStorage.getItem('otp')

function OtpCheck({children}) {
  return (
    <Route
      render={() =>
        otp !== null ? ( children ) : (
          <Redirect to={{ pathname: "/auth" }}/>
        )
      }
    />
  );
}

export default OtpCheck