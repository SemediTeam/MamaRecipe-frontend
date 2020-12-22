import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Edit } from '../../assets'
import './profile.css'

export class Profile extends Component {
    render() {
        return (
            <>
            <div className="container section-profile d-flex justify-content-center flex-column align-items-center">
                <div className="img-profile-section">
                    <img alt="" src="https://s3-alpha-sig.figma.com/img/d063/327b/4662c85cb7661f579e2c9baff0ce5fdc?Expires=1609718400&Signature=M5qACfjoeJDuvBOtvLGVoLgIA9LC-s~tm-2c3Cee9IhMMKGw0IuYa5BLg8zFyycBsSVSDw4hoFs8mHD9wfrmpIOpIjCfNs6uE9BWUNrhLL4lc9ojH60ba3mGu46whHNxCTb25mqaNjnXvEH6RdtCPWNZVQsKFPow~vc3p46WE1FPjRFr4zgXh41p6KKRe5lyBtVqkFgv5yxgahYyoGo1ZlAjO8MPNzj4aQLgrKZRJSHSLLkSrGhPJ5NIVo~UBo14w0ZOFcFFoYRq09S2hvxJjdUoCE9JotNJ7rHtXTWOfn1n8w9JTjgINDSvCPnWCbd3c0xG2GqsAk9eN5yjTeZ58Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="img-profile"/>
                    <Link>
                        <img alt="" src={Edit} className="edit-profile" />
                    </Link>
                </div>
                <div className="mt-4">
                    <h2>Garneta Sharina</h2>
                </div>
            </div>
            <div className="container">
                <div className="col-lg-5 d-flex justify-content-between bg-warning">
                    <Link>My Recipe</Link>
                    <Link>Saved Recipe</Link>
                    <Link>Liked Recipe</Link>
                </div>
            </div>
            </>
        )   
    }
}

export default Profile
