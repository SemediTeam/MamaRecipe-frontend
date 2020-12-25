import React from 'react'
import { Route,Redirect } from 'react-router-dom';
import { connect } from "react-redux";

function LoginCheck({children, auth, ...rest}) {
  return (
    <Route
      {...rest}
      render={() =>
        auth.auth.isLogin ? (
          <Redirect to={{ pathname: '/' }}/>
        ) : ( children )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return{
    auth: state
  }
}

export default connect(mapStateToProps)(LoginCheck)