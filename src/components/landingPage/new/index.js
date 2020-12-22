import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class New extends Component {
    render() {
        return (
            <div className="container row">
                    <div className="d-flex align-items-center col-lg-9 col-md-9 col-sm-12">
                        <div className="point mr-3"></div>
                        <h2>New Recipe !</h2>
                    </div>
                    <div className="d-flex popular ml-3">
                        <div className="position-relative col-lg-8 col-md-6 col-sm-12">
                            <img className="new-dashboard position-absolute" src="https://s3-alpha-sig.figma.com/img/a940/c01b/c2792cef25a0bfa97a2bd8c65b80f9c5?Expires=1609718400&Signature=fvJ7~1byy55qVzQEgoHAg-mnvr2GoqtjjZCUXXSFUoymANx6rqe1Ge7K58F2ex97feE~pRF0~FfEW5P6eUh-era51mzpwKXvWRChekgNkHWXkkrHiE~i8y-xYG5KCnG1V7N7LazoHNdrrxtRlJhAk4DzuxIXc~q1d3sKXxYb8HquDOOm6YTDN3dvP67w8iHuv6u9HLo5k8FcLmyPdFRD9bGi1UcckfcsMXT4dGZBd7xfNICO7adjLZ53l9qieB-G-Y~JG2guOiYs0UcPry09OJtHx-oHr5LVvCARde-hy1idWondg0iIECxNqFLJ4xfbnHZnnFM1aX44XbsK1hgJug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"alt=""/>
                            <div className="background-new position-absolute"></div>
                        </div>
                        <div className="description col-lg-4 col-md-6-col-sm-12">
                            <div>
                                <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
                                <div ></div>
                                <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                                <Button variant="warning">
                                Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default New
