import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Navbar from "../../components/navbar";
import { imgLoader, SearchIcon } from '../../assets/index';
import './search.css';

export default function Search(props) {
  const search = props.location.search;
  const name = new URLSearchParams(search).get("name");

  return (
    <>
      <Route path={props.match.path} component={Navbar}/>
      <div className="container-fluid p-0 p-md-3 px-xl-5 mt-0 mt-md-5">
        <div className="d-flex d-md-none mt-3"></div>
        <div className="px-3 px-xl-5 w-100 d-flex justify-content-end justify-content-md-between align-items-center flex-wrap search-header">
          <p className="blur-color font-weight-medium m-0 d-none d-md-flex row flex-nowrap">Getting result <span className="text-dark mx-1">' {name} '</span> items</p>
          <InputGroup className="col-9 col-md-6 col-lg-4 pr-0 mt-1 mt-md-0 py-3 py-md-5">
            <Form.Control id="searchInput" type="text" placeholder="Search Food, Recipes" className="py-3 py-md-2"
            onKeyPress={(e)=>{
              if(e.target.value !== '' && e.key === 'Enter'){
                e.preventDefault()
                props.history.push({ 
                  pathname: '/search',
                  search: `name=${e.target.value}`
                });
              }
            }}/>
            <InputGroup.Prepend>
              <InputGroup.Text style={{backgroundColor:'#efefef'}}> <img src={SearchIcon} alt="icon"/> </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
          <hr className="w-100 row m-0 d-none d-md-flex" style={{border:'solid 2px #ededed'}}/>
        </div>
        <div className="container-fluid px-xl-5 mt-0 mt-md-2">
          <div className="p-0 pt-4 d-flex flex-wrap">

            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative search-img-items clicked">
                <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                <div className="position-absolute text-light p-3 search-text-item" style={{zIndex:2}}>
                  <h4 style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}> ini ceritanya makanan mantul buatan bude masak mantul banget</h4>
                  <p style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}} className="m-0">lorem ipsum dolor amet mantap jiwa ini maskan enak sumpah dijamin ngga nyesel baca ini resep gaskeun kuy</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
