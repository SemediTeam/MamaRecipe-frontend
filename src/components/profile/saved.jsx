import Axios from "axios";
import React, { Component } from "react";
import { imgLoader } from "../../assets";

const getUrl = process.env.REACT_APP_BASEURL;

class Saved extends Component {
  state = {
    bookmarks: [],
  };

  getSavedRecipe = () => {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        "x-access-token":
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    };
    Axios.get(getUrl + "/bookmarks", config)
      .then(({ data }) => {
        // console.log(data.data)
        this.setState({
          bookmarks: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getSavedRecipe();
  };

  render() {
    const { bookmarks } = this.state;
    // console.log(bookmarks.length)
    return (
      <>
        {bookmarks[0] === undefined ? (
          <>
            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
                <div className="position-relative img-recipe-profile w-100 clicked">
                    <img className="w-100 h-100" alt="recipe" src={imgLoader} style={{objectFit:'cover',objectPosition:'center'}}/>
                    <div className="position-absolute w-100 h-100" style={{zIndex:1, top:0, left:0, backgroundColor:'#00000020'}}></div>
                    <h2 className="position-absolute text-light" style={{zIndex:2, bottom:'15px', left:'15px'}}>Loading ...</h2>
                </div>
            </div>
          </>
        ) : (
          <>
            {bookmarks[0] !== undefined &&
              bookmarks.map(({ recipe_name, recipe_img, id_recipe }) => {
                return (
                  <div
                    className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3"
                    key={id_recipe}
                  >
                    <div className="position-relative img-recipe-profile clicked">
                      <img
                        className="w-100 h-100"
                        alt="recipe"
                        src={JSON.parse(recipe_img)[0]}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                      <div
                        className="position-absolute w-100 h-100"
                        style={{
                          zIndex: 1,
                          top: 0,
                          left: 0,
                          backgroundColor: "#00000020",
                        }}
                      ></div>
                      <h2
                        className="position-absolute text-light"
                        style={{ zIndex: 2, bottom: "15px", left: "15px" }}
                      >
                        {recipe_name}
                      </h2>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </>
    );
  }
}

export default Saved;
