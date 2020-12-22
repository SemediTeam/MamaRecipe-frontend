import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class Popular extends Component {
    render() {
        return (
            <div className="container row">
                    <div className="d-flex align-items-center col-lg-9 col-md-9 col-sm-12">
                        <div className="point mr-3"></div>
                        <h2>Popular For You !</h2>
                    </div>
                    <div className="d-flex popular ml-3">
                        <div className="position-relative col-lg-8 col-md-6 col-sm-12">
                            <img className="popular-dashboard position-absolute" src="https://s3-alpha-sig.figma.com/img/e20b/679e/52207741d95649c4cb58a57ba663027f?Expires=1609718400&Signature=ZDgBZFkg3SotksPL7GKBvioT-hIUEgttF~E2ThbajY7eBlVzjSKZzky1rNIYMz6lrnEfLdfFIEQ-~pYR~WOSgW1HpiTsvxmSPI6k5u0zcb1n38yUgX-KyXgrgqvPnazyrJ9fJ2zwOzpqP~nSuBFciFal579yYnxL94XSnXxS5k42qOKk~A6-A53JE0r7BOySbffHXLfDZDNOYfF9Ch80w1wGsygdUbJPmVRVFvSPdcEmUFWewFhsLUHD0lRAfgjncxXBhPJ8IxZPrZr7aYXvN9JTH-osyeI87osA5-Il0Tuwm9eVDPDGA8Vun8yYiDoyQZ39ayBCEaGAnx0lfFTEUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"alt=""/>
                            <div className="border-popular position-absolute"></div>
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

export default Popular
