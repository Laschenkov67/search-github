import React, { Component } from "react";
import "./App.css";
import { items } from "./tempList";
import ReposList from "./components/ReposList";

class App extends Component {
  state = {
    items: items,
    url: "https://api.github.com/search/repositories?",
    base_url:"https://api.github.com/search/repositories?",
    details_id: 35389,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ""
  };

  async getItems() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.items.length === 0) {
        this.setState(() => {
          return { error: "sorry, but your search did not return any results" };
        });
      } else {
        this.setState(() => {
          return { items: jsonData.items, error: "" };
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getItems();
  }

  displayPage = index => {
    switch (index) {
      default:
      case 1:
        return (
          <ReposList
            items={this.state.items}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      case 0:
        return (
          <ReposList
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
    }
  };

  handleIndex = index => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      },
      () => {
         console.log(this.state.search);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return { url: `${base_url}${query}${search}`, search: "" };
        
      },
      () => {
        console.log(this.url);
        this.getItems();
      }
    );
  };

  render() {
    return (
      <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
    );
  }
}

export default App;
