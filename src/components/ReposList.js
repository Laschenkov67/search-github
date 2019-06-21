import React, { Component } from "react";
import Repos from "./Repos";
import ReposSearch from "./ReposSearch";

export default class ReposList extends Component {
  render() {
    const {
      items,
      handleDetails,
      value,
      handleSubmit,
      handleChange,
      error
    } = this.props;

    return (
      <React.Fragment>
        <ReposSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">repositories list</h1>
            </div>
          </div>
          {/* end of title */}
          <div className="row">
            {error ? (
              <h1 className="text-danger text-center">{error}</h1>
            ) : (
              items.map(recipe => {
                return (
                  <Repos
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={handleDetails}
                  />
                );
              })
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
