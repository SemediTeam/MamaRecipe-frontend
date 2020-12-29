import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Placeholder } from 'semantic-ui-react'
import { bookmarkNoSelected, bookmarkSelected, likeNoSelected, likeSelected} from '../../assets';
import axios from 'axios';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bookmarkRecipeAction,likedRecipeAction } from '../../global/actionCreators/detailRecipe';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});

class DetailRecipe extends Component {
  constructor(){
    super()
    this.state = {
      isBookmark : false,
      isLiked : false
    }
  }
  
  handlerBookmark = async (params,value) => {
    let isFound = false
    const urlRecipe = Number(this.props.location.pathname.split('/')[2])
    await value !== undefined && value !== 'Data not Found' && await value.map(({id_recipe}) => 
      id_recipe === urlRecipe && (isFound = true)
    )
    if (!isFound) {
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
    }else{
      this.handlerBookmarkSelected(value)
    }
  }

  handlerDeleteBookmark = async (params,value) => {
    let isFound = false
    const urlRecipe = Number(this.props.location.pathname.split('/')[2])
    await value !== undefined && value !== 'Data not Found' && await value.map(({id_recipe,id}) => 
      id_recipe === urlRecipe && (isFound = id)
    )
    const config = {
      headers: {
        'Content-Type': 'application/json', 'x-access-token' : 'Bearer ' + JSON.parse(params).token
      }
    }
    await api.delete(`/bookmarks/${isFound}`,config).then(()=>{
      this.props.dispatch(bookmarkRecipeAction(config))
    }).catch((e)=>{
      console.log(e.response.status);
    })
  }

  handlerBookmarkSelected = async (params) => {
    let isFound = false
    const urlRecipe = Number(this.props.location.pathname.split('/')[2])
    await params !== undefined && params !== 'Data not Found' && await params.map(({id_recipe}) => 
      id_recipe === urlRecipe && (isFound = true)
    )
    this.setState({
      isBookmark: isFound
    })
  }

  handlerLike = async (params,value) => {
    let isFound = false
    const urlRecipe = Number(this.props.location.pathname.split('/')[2])
    await value !== undefined && value !== 'Data not Found' && await value.map(({id_recipe}) => 
      id_recipe === urlRecipe && (isFound = true)
    )
    if (!isFound) {
      const {id_recipe} = this.props.recipe.dataRecipe
      const data = JSON.stringify({
        id_user : JSON.parse(params).id,
        id_recipe : id_recipe,
      })
      const config = {
        headers: {
          'Content-Type': 'application/json', 'x-access-token' : 'Bearer ' + JSON.parse(params).token
        }
      }
      await api.post('/likes',data,config).then(()=>{
        this.props.dispatch(likedRecipeAction(config))
      }).catch((e)=>{
        console.log(e.response.status);
      })
    }else{
      this.handlerLikeSelected(value)
    }
  }

  handlerDeleteLike = async (params,value) => {
    let isFound = false
    const urlRecipe = Number(this.props.location.pathname.split('/')[2])
    await value !== undefined && value !== 'Data not Found' && await value.map(({id_recipe,id}) => 
      id_recipe === urlRecipe && (isFound = id)
    )
    const config = {
      headers: {
        'Content-Type': 'application/json', 'x-access-token' : 'Bearer ' + JSON.parse(params).token
      }
    }
    await api.delete(`/likes/${isFound}`,config).then(()=>{
      this.props.dispatch(likedRecipeAction(config))
    }).catch((e)=>{
      console.log(e.response.status);
    })
  }

  handlerLikeSelected = async (params) => {
    let isFound = false
    const urlRecipe = Number(this.props.location.pathname.split('/')[2])
    await params !== undefined && params !== 'Data not Found' && await params.map(({id_recipe}) => 
      id_recipe === urlRecipe && (isFound = true)
    )
    this.setState({
      isLiked: isFound
    })
  }

  componentDidUpdate(prevProps, prevState){
    const {dataBookmarks,dataLiked} = this.props.recipe
    if (prevProps.recipe.dataBookmarks !== dataBookmarks) {
      this.handlerBookmarkSelected(dataBookmarks)
    }
    if (prevProps.recipe.dataLiked !== dataLiked) {
      this.handlerLikeSelected(dataLiked)
    }
  }

  render() {
    const {dataRecipe,isFulfilled,isRejected,dataBookmarks,dataLiked} = this.props.recipe
    return (
      <>
        <div className="position-relative container-fluid mt-5 pt-0 pt-md-5 pl-xl-5 pr-xl-5">
          <div className="w-100 full-h d-flex justify-content-center pt-0 pt-md-5">
            <div className="col-12 col-md-11 col-lg-10 col-xl-9">
              <div className="w-100 d-flex flex-column align-items-center">
                <h1 className="mb-5 text-center">{isFulfilled || isRejected ? dataRecipe.recipe_name : 'Loading Title ...'}</h1>
                <div className="position-relative col-12 col-md-11 col-lg-10 col-xl-9 mb-5 p-0">

                  {
                    isFulfilled || isRejected ? <img src={JSON.parse(dataRecipe.recipe_img)[0]} alt="recipeImage" className="w-100 p-0 img-recipe-detail detail-rounded"/>
                    : <Placeholder className="w-100 p-0 img-recipe-detail detail-rounded"><Placeholder.Image/></Placeholder>}
                  
                  <div className="action-user position-absolute row w-50 d-flex justify-content-end">
                    {
                      isFulfilled || isRejected ?
                        (this.state.isBookmark ?
                          <div className="detail-rounded p-3 mr-3 clicked Selected" onClick={(e) => {
                            e.preventDefault()
                            localStorage.getItem('token') !== null && this.handlerDeleteBookmark(localStorage.getItem('token'),dataBookmarks)
                          }}>
                            <img src={bookmarkSelected} alt="bookmark"/>
                          </div>
                        :
                          <div className="detail-rounded p-3 mr-3 clicked noSelected" onClick={(e) => {
                            e.preventDefault()
                            localStorage.getItem('token') !== null && this.handlerBookmark(localStorage.getItem('token'),dataBookmarks)
                          }}>
                            <img src={bookmarkNoSelected} alt="bookmark"/>
                          </div>
                        )
                      :
                        <div className="detail-rounded p-3 p-sm-4 mr-3" style={{backgroundColor: '#e0e0e0'}}></div>
                    }

                    {
                      isFulfilled || isRejected ?
                        (this.state.isLiked ?
                          <div className="detail-rounded p-2 clicked Selected" onClick={(e) => {
                            e.preventDefault()
                            localStorage.getItem('token') !== null && this.handlerDeleteLike(localStorage.getItem('token'),dataLiked)
                          }}>
                            <img src={likeSelected} alt="like"/>
                          </div>
                        :
                          <div className="detail-rounded p-2 clicked noSelected" onClick={(e) => {
                            e.preventDefault()
                            localStorage.getItem('token') !== null && this.handlerLike(localStorage.getItem('token'),dataLiked)
                          }}>
                            <img src={likeNoSelected} alt="like"/>
                          </div>
                        )
                      :
                        <div className="detail-rounded p-3 p-sm-4" style={{backgroundColor: '#e0e0e0'}}></div>
                    }
                  </div>
                </div>
                <div className="mt-5 mb-5 w-100">
                  <h2 className="mb-5">Ingredients</h2>
                  <p className="m-0 font-weight-medium">{isFulfilled || isRejected ? dataRecipe.recipe_ingredients : 'Loading Ingredients step . . .'}</p>
                </div>
                <div className="mt-5 mb-5 w-100 d-flex flex-column">
                  <h2 className="mb-5">Video Step</h2>
                  { isFulfilled || isRejected ? JSON.parse(dataRecipe.recipe_video).map((value,index)=>
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
const mapStateToProps = ({recipe}) => {
  return{
    recipe
  }
}

export default connect(mapStateToProps)(DetailRecipe)
