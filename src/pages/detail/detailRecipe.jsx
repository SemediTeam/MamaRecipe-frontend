import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Placeholder } from 'semantic-ui-react'
import { bookmarkNoSelected, bookmarkSelected} from '../../assets';
import axios from 'axios';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bookmarkRecipeAction } from '../../global/actionCreators/detailRecipe';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class DetailRecipe extends Component {
  constructor(){
    super()
    this.state = {
      isBookmark : false
    }
  }
  
  handlerBookmark = async (params) => {
    const {id_recipe} = this.props.recipe.dataRecipe
    const data = JSON.stringify({
      recipe_id : id_recipe
    })
    const config = {
      headers: {
        'Content-Type': 'application/json', 'x-access-token' : 'Bearer ' + JSON.parse(params).token
      }
    }
    await api.post('/bookmarks',data,config).then(()=>{
      this.props.dispatch(bookmarkRecipeAction(config))
    }).catch((e)=>{
      console.log(e.response.status);
    })
  }

  handlerBookmarkSelected = async (params) => {
    const bookmarkedRecipe = []
    console.log(params);
    params !== 'Data not Found' ? await params.map(({id_recipe}) => {
      return (id_recipe === Number(this.props.location.pathname.split('/')[2]) && bookmarkedRecipe.push(id_recipe))
    }) : this.setState({isBookmark:false})
    if (bookmarkedRecipe.length) {
      this.setState({
        isBookmark  : true
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    const {dataBookmarks} = this.props.recipe
    if (prevProps.recipe.dataBookmarks !== dataBookmarks) {
      this.handlerBookmarkSelected(dataBookmarks)
    }
  }

  render() {
    const {dataRecipe,isFulfilled} = this.props.recipe
    return (
      <>
        <div className="position-relative container-fluid mt-5 pt-0 pt-md-5 pl-xl-5 pr-xl-5">
          <div className="w-100 full-h d-flex justify-content-center pt-0 pt-md-5">
            <div className="col-12 col-md-11 col-lg-10 col-xl-9">
              <div className="w-100 d-flex flex-column align-items-center">
                <h1 className="mb-5 text-center">{isFulfilled ? dataRecipe.recipe_name : 'Loading Title ...'}</h1>
                <div className="position-relative col-12 col-md-11 col-lg-10 col-xl-9 mb-5 p-0">

                  {
                    isFulfilled ? <img src={JSON.parse(dataRecipe.recipe_img)[0]} alt="recipeImage" className="w-100 p-0 img-recipe-detail detail-rounded"/>
                    : <Placeholder className="w-100 p-0 img-recipe-detail detail-rounded"><Placeholder.Image/></Placeholder>}
                  
                  <div className="action-user position-absolute row w-50 d-flex justify-content-end">
                    {
                      this.state.isBookmark ? (
                        <div className="detail-rounded p-2 p-sm-3 mr-3 bookmark-Selected">
                          <img src={bookmarkSelected} alt="bookmark"/>
                        </div>
                      )
                      :  (
                        <div className="detail-rounded p-2 p-sm-3 mr-3 clicked bookmark-noSelected" onClick={(e) => {
                          e.preventDefault()
                          this.handlerBookmark(localStorage.getItem('token'))
                        }}>
                          <img src={bookmarkNoSelected} alt="bookmark"/>
                        </div>
                      ) 
                    }
                    

                   

                    <div className="detail-rounded p-2 p-sm-3 clicked bookmark-noSelected">
                      {/* <img src={bookmarkNoSelected} alt="bookmark"/> */}
                    </div>
                  </div>
                </div>
                <div className="mt-5 mb-5 w-100">
                  <h2 className="mb-5">Ingredients</h2>
                  <p className="m-0 font-weight-medium">{isFulfilled ? dataRecipe.recipe_ingredients : 'Loading Ingredients step . . .'}</p>
                </div>
                <div className="mt-5 mb-5 w-100 d-flex flex-column">
                  <h2 className="mb-5">Video Step</h2>
                  { isFulfilled ? JSON.parse(dataRecipe.recipe_video).map((value,index)=>
                    <Link key={index} to={{pathname: `/recipe/${dataRecipe.id_recipe}/${index+1}`}}>
                      <div className="btn-main detail-rounded col-12 col-md-7 col-xl-4 p-4 mt-5 btn btn-warning font-weight-medium">
                        {`Video Step ${index+1}`}
                      </div>
                    </Link>
                  )
                    : <div className="btn-main detail-rounded col-12 col-md-7 col-xl-4 p-4 btn btn-warning font-weight-medium">
                      Loading . . .
                    </div>
                  }
                </div>
                <div className="mt-5 mb-5 w-100">
                  <Form className="d-flex flex-column align-items-center">
                    <Form.Group controlId="ControlTextarea" className="col-12 mb-4 detail-rounded p-4" style={{backgroundColor: '#F6F5F4'}}>
                      <Form.Label className="mb-1 font-weight-medium">Comment :</Form.Label>
                      <Form.Control as="textarea" placeholder="give your opinion here ..." rows={6} style={{backgroundColor: 'transparent', border: 'none', outline: 'none'}}/>
                    </Form.Group>
                    <Button variant="warning" type="submit" className="col-12 col-md-8 col-lg-4 btn-main pt-3 pb-3 font-weight-medium">
                      Send
                    </Button>
                  </Form>
                </div>
                <div className="mt-5 mb-5 w-100">
                  <h2 className="mb-5">Comment</h2>
                  <div className="d-flex flex-column col-12 col-md-8 col-lg-6">
                    <div className="d-flex flex-row align-items-center">
                      <Placeholder  className="img-comments rounded-circle"><Placeholder.Image/></Placeholder>
                      <div className="d-flex flex-column justify-content-center h-100 pl-4">
                        <h6>Loading User ...</h6>
                        <span>Loading Comment ...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = ({recipe,}) => {
  return{
    recipe
  }
}

export default connect(mapStateToProps)(DetailRecipe)
