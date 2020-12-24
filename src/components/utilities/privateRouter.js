import React from 'react'
import { Route,Redirect } from 'react-router-dom';
import { connect } from "react-redux";

function PrivateRouter({children, auth, ...rest}) {
  return (
    <Route
      {...rest}
      render={() =>
        auth.auth.isLogin ? ( children ) : (
          <Redirect
            to={{ pathname: "/auth" }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return{
    auth: state
  }
}

export default connect(mapStateToProps)(PrivateRouter)