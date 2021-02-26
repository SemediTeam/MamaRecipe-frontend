import React, { Component } from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import Navbar from "../../components/navbar";
import { SearchIcon } from '../../assets/index';
import { Placeholder } from 'semantic-ui-react'
import Footer from '../../components/footer';
import './search.css';

import { connect } from 'react-redux';
import { searchItemAction } from '../../global/actionCreators/search';

import { NotFound } from '../../assets/index';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      placeholder: [1,2,3,4,5,6],
    }
    // this._mounted = false
  }

  handleGetSearch = (params) => {
    const { location,dispatch } = this.props
    const name = new URLSearchParams(location.search).get("name");
    const param = params || name
    if (name !== params) {
      dispatch(searchItemAction(param));
    }
  }

  componentDidMount = () => {
    this.handleGetSearch()
  }

  render() {
    const search = this.props.location.search;
    const name = new URLSearchParams(search).get("name");
    const {items} = this.props
    const {pageInfo} = this.props.items.dataRecipe

    const currPage = (param) => {
      if (param !== undefined) {
        return param.currentPage
      }else{return 1}
    }

    console.log(items);
    return (
      <>
        <Route path={this.props.match.path} component={Navbar}/>
        <div className="container-fluid p-0 p-md-3 px-xl-5 mt-0 mt-md-5">
          <div className="d-flex d-md-none mt-3"></div>
          <div className="px-3 px-xl-5 w-100 d-flex mt-4 mt-md-3 justify-content-center justify-content-md-between align-items-center flex-wrap search-header">
            <p className="blur-color font-weight-medium m-0 d-none d-md-flex row flex-nowrap h4">Getting result <span className="text-dark mx-1">' {name} '</span> items</p>
            <InputGroup className="col-9 col-md-6 col-lg-4 pr-0 mt-5 mt-md-0 py-3 py-md-5">
              <Form.Control size="lg" id="searchInput" type="text" placeholder="Search Food, Recipes" className="py-3 py-md-2"
              onKeyPress={(e)=>{
                if(e.target.value !== '' && e.key === 'Enter'){
                  e.preventDefault()
                  this.props.history.push({ 
                    pathname: '/search',
                    search: `name=${e.target.value}`
                  });
                  this.handleGetSearch(e.target.value)
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

              {
              items.isFulfilled || items.isRejected ? 
                items.dataRecipe.recipe && items.dataRecipe.recipe.map(({id_recipe,recipe_name,recipe_desc,recipe_img})=>{
                  return(
                    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3" key={id_recipe}>
                      <div className="search-item position-relative">
                        <div className="w-100 h-100 ">
                          <Link to={{
                            pathname:`/recipe/${id_recipe}`
                          }}>
                            <div className="position-absolute p-4 d-flex flex-column justify-content-end w-100 h-100 clicked search-hover" style={{zIndex:'1',top: 0,left:0}}>
                              <h1 className="w-100" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient: 'vertical'}}>{recipe_name}</h1>
                              <span className="w-100 font-weight-medium h4" style={{overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:3, WebkitBoxOrient: 'vertical'}}>{recipe_desc}</span>
                            </div>
                            <img src={JSON.parse(recipe_img)[0]} className="position-absolute w-100 h-100" alt="recipe" style={{zIndex:'-2',top: 0,left:0, objectFit:'cover', objectPosition:'center'}}/>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }) :
                this.state.placeholder && this.state.placeholder.map((i)=>{
                  return(
                    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-4 mb-lg-5 p-0 px-sm-2 px-lg-3" key={i}>
                      <div className="search-item position-relative">
                        <div className="w-100 h-100 ">
                          <Placeholder className="position-absolute w-100 h-100" style={{zIndex:'-2',top: 0,left:0, maxWidth: 'none' }}>
                            <Placeholder.Image/>
                          </Placeholder>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              {
                items.isRejected && (
                  <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: 40}}>
                    <img src={NotFound} alt="Recipe Not Found"/>
                    <h3 style={{marginTop: 20, color: '#999'}}>Recipe Not Found</h3>
                  </div>
                )
              }

            </div>

            {
              items.isFulfilled && (
                <div className="container-fluid col-12 col-md-6 col-lg-4 d-flex justify-content-between px-2 px-xl-5">
                  <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-between px-2 px-xl-5">
                    <button className="btn btn-warning btn-main rounded" onClick={(e)=>{
                      e.preventDefault()
                      pageInfo.previousPage !== null ? this.props.dispatch(searchItemAction(pageInfo.previousPage.split('&')[0].split('=')[1],pageInfo.previousPage.split('&')[1].split('=')[1]-1)) : console.log('none');
                    }}>Prev</button>
                    <div className="mx-4 d-flex justify-content-center">
                      <h2>{currPage(pageInfo)}</h2>
                    </div>
                    <button className="btn btn-warning btn-main rounded" onClick={(e)=>{
                      e.preventDefault()
                      pageInfo.nextPage !== null ? this.props.dispatch(searchItemAction(pageInfo.nextPage.split('&')[0].split('=')[1],pageInfo.nextPage.split('&')[1].split('=')[1])) : console.log('none');
                      // this.props.history.push(`/search?name=${pageInfo.nextPage.split('_')[1]}`)
                    }}>Next</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <Route path={this.props.match.path} component={Footer}/>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    items: state.search
  }
}

export default connect(mapStateToProps)(Search)