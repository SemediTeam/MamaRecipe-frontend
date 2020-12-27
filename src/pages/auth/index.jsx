import React, { Component } from 'react'
import './auth.css';
import { LogoAuth } from '../../assets';
import {Login,Register,ForgotPassword,Validate} from "../../components/auth";
import { Route, Switch, Redirect } from 'react-router-dom';

export default class Auth extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="position-relative d-none d-md-block col-md-4 col-lg-6 p-0" style={{backgroundColor : 'yellow'}}>
            <img src='
              https://s3-alpha-sig.figma.com/img/86b2/055d/76c7e3577554580136d5f65222046a21?Expires=1609113600&Signature=DupUBhAi8PEKB0J5~1KsaHadJsShV0PGavWbMPIM-QCpyrw-RboCFvI6Tm07M7Dkzl4v7Ao4i4~wROBuD~V42Fb22pt3MwUHzYRkKH5z71~D3LXZbUBwcZr2Ug-y0AubXJXDNRz3982wmIBkz-g6bbNzgC21vCp2g5wB4zcqelLmjSILEaDASii0S~PaxcIdWvu6t8KM9x0HtSoJNbCAH-R1gprYY8sXjptFeDaxkuk7DU3J7NpBwt7fPR92uvjppBYtG1x1XGBlifAyf6GrWRXzKEMvKvckQmlSizoaXV-JPspvFABpPR1DOsA1wsemWSlPDH4SDTr69f-CeSNmpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA
            ' alt="background" style={{objectFit: 'cover',objectPosition: 'center', height:'100vh'}} className="w-100"/>
            
            <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
              <img src={LogoAuth} alt="logo"/>
            </div>
          </div>

          <div className="full-h d-flex justify-content-center align-items-center col-12 col-md-8 col-lg-6">
            <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center font-weight-medium p-0">
              <Switch>
                <Route exact path={this.props.match.path} component={Login} />
                <Route exact path={`${this.props.match.path}/signin`} component={Login} />
                <Route exact path={`${this.props.match.path}/signup`} component={Register} />
                <Route exact path={`${this.props.match.path}/forgotpassword`} component={ForgotPassword} />
                <Route exact path={`${this.props.match.path}/validation`} component={Validate} />
                <Route path="*" render={()=>
                  <Redirect to={{ pathname: "/blank" }}/>
                }/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
