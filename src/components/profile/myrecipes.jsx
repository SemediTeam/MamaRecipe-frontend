import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { imgLoader } from "../../assets";

const getUrl = process.env.REACT_APP_BASEURL;

class Myrecipes extends Component {
  state = {
    img: [],
    myRecipe: [],
    isHidden: true,
  };

  deleteProduct = (params) => {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        "x-access-token":
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    };
    Axios.delete(getUrl + "/recipe/" + params, config);

    this.props.history.push("/profile");
  };

  getMyRecipe = () => {
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        "x-access-token":
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    };
    Axios.get(getUrl + "/recipe/byuser", config)
      .then(({ data }) => {
        this.setState({
          // img: data.data.map(
          //   ({recipe_img}) => {
          //     return JSON.parse(recipe_img)
          //   }
          // ),
          myRecipe: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getMyRecipe();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.recipe !== this.state.recipe) {
      this.getMyRecipe();
    }
  };

  render() {
    const { myRecipe, img } = this.state;

    return (
      <>
        {myRecipe === null ? (
          <>
            <div className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3">
              <div className="position-relative img-recipe-profile clicked">
                <img
                  className="w-100 h-100"
                  alt="recipe"
                  src={imgLoader}
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
                  Loading ...
                </h2>
              </div>
            </div>
          </>
        ) : (
          <>
            {myRecipe.data &&
              myRecipe.data.map(({ recipe_name, recipe_img, id_recipe }) => {
                return (
                  <div
                    className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-2 mb-4 pl-3 pr-3"
                    key={id_recipe}
                    onClick={() => {
                      this.setState({
                        isHidden: !this.state.isHidden,
                      });
                    }}
                  >
                    <div className="position-relative img-recipe-profile w-100 clicked">
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
                      {this.state.isHidden ? (
                        <h2
                          className="position-absolute text-light"
                          style={{ zIndex: 2, bottom: "15px", left: "15px" }}
                        >
                          {recipe_name}
                        </h2>
                      ) : (
                        <div
                          className="position-absolute d-flex flex-column justify-content-center"
                          style={{ zIndex: 2, bottom: "35px", left: "35px" }}
                        >
                          <Link
                            to={{ pathname: "/recipe/" + id_recipe }}
                            className="text-light mb-4"
                            style={{ fontSize: "30px" }}
                          >
                            See Detail
                          </Link>
                          <Link
                            to={{ pathname: `/editRecipe/${id_recipe}` }}
                            className="text-light mb-2"
                            style={{ fontSize: "30px" }}
                          >
                            Edit Recipe
                          </Link>
                          <p
                            onClick={() => {
                              this.deleteProduct(id_recipe);
                            }}
                            className="text-light"
                            style={{ fontSize: "30px" }}
                          >
                            Delete Recipe{" "}
                          </p>
                        </div>
                      )}
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

export default Myrecipes;
