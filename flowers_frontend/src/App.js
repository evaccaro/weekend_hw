import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FlowerContainer from "./FlowerContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      flowers: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/flowers")
      .then(res => res.json())
      .then(flowers => this.setState({ flowers }));
  }

  createFlower = flowerData => {
    fetch("http://localhost:3000/flowers", {
      method: "post",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(flowerData)
    })
      .then(res => res.json())
      .then(json => {
        return json;
      });
  };

  deleteFlower = flowerData => {
    fetch(`http://localhost:3000/flowers/${flowerData}`, {
      method: "delete"
    });
  };

  render() {
    console.log(this.state.flowers);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flowers!</h1>
        </header>
        <FlowerContainer
          flowers={this.state.flowers}
          createFlower={this.createFlower}
          deleteFlower={this.deleteFlower}
        />
      </div>
    );
  }
}

export default App;
