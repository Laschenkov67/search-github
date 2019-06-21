import React, { Component } from "react";

export default class Repos extends Component {
  render() {
    const {
      name,
      stargazers_count,
      html_url,
      watchers_count,
    } = this.props.recipe;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <div className="card-body text-capitalize">
            <a
                href={html_url}
                className="text-primary text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Название проекта: {name}
              </a>
              <p/>
              <h6 className="text-success text-slanted">количество звезд: {stargazers_count}</h6>
              <h6 className="text-warning text-slanted">
                количество подписчиков: {watchers_count}
              </h6>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
