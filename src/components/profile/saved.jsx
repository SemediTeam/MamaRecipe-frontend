import React from 'react'
import { imgLoader } from '../../assets'

export default function Saved() {
  return (
    <>
      <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
          <div className="position-relative img-recipe-profile clicked">
              <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
              <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
              <h2 className="position-absolute text-light" style={{zIndex:2, bottom:'15px', left:'15px'}}>Loading ...</h2>
          </div>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
          <div className="position-relative img-recipe-profile clicked">
              <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
              <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
              <h2 className="position-absolute text-light" style={{zIndex:2, bottom:'15px', left:'15px'}}>Loading ...</h2>
          </div>
      </div>
    </>
  )
}
