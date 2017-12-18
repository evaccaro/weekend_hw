import React from "react";

class FlowerContainer extends React.Component {
  state = {
    name: "Flower Name",
    features: "Flower Features",
    sun_needs: "Sun Needs",
    soil_needs: "Soil Needs",
    height: "Height",
    bloom_time: "Bloom Time"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createFlower(this.state);
  };

  handleDelete = event => {
    let index = parseInt(event.target.id);
    this.props.deleteFlower(index);
    document.getElementById(index).remove();
  };

  render() {
    const allFlowers = this.props.flowers.map(flower => (
      <div id={flower.id}>
        <li>
          Name: {flower.name}
          <button>Edit</button>
          <button id={flower.id} onClick={this.handleDelete}>
            Delete
          </button>
        </li>
      </div>
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.features}
            name="features"
          />
          <input type="submit" />
        </form>
        <ul>{allFlowers}</ul>
      </div>
    );
  }
}

export default FlowerContainer;
