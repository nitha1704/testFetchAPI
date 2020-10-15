import React, { Component } from "react";
import { monstersList } from "../data";

export class StateFilterArray extends Component {
  constructor() {
    super();
    this.state = { monList: monstersList };
  }

  renderMonList() {
    return this.state.monList.map((item) => {
        const {id, image, name, species} = item
      return (
        <div className="item">
          <img src={image} alt="" className="img-fit" />
          <h3>{name}</h3>
          <p>{species}</p>
          <button onClick={() => this.removeItem(id)}>Remove Item</button>
          <br />
          <button onClick={() => this.changeName(id)}>Change Name</button>
        </div>
      );
    })
  }

  removeItem(id) {
    const filterItem = this.state.monList.filter((item)=> item.id !== id);
    this.setState({ monList: filterItem });
  }

  changeName(id) {
    const filterItem = this.state.monList.filter((item) => item.id === id);
    filterItem.map((item)=> {
        item.name = 'pucker' + item.name;
        item.species = id;
    })
    

    this.setState({monList: this.state.monList})
    console.log(this.state.monList);
  }

  render() {
    return (
      <>
        <div className="wrap-item">{this.renderMonList()}</div>
      </>
    );
  }
}

export default StateFilterArray;
