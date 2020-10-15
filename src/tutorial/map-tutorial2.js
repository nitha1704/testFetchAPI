import React from "react";
import { monstersList } from "./data";

class MapTutorial2 extends React.Component {
  state = {
    puck: "xx",
    puxer: "q"
  }

  render() {
    
    const RenderMonster2 = (props) => {
      const { image, name, species } = props;
      const showEvent = (e) => {
        console.log(e);
        console.log(e.target);
      };
      const showEvent2 = () => {
        console.log(species)
      };
      return (
        <div className="item">
          <img src={image} alt="" className="img-fit" />
          <h1 onClick={showEvent}>{name}</h1>
          <h3 onMouseOver={showEvent2}>{species}</h3>
        </div>
      );
    };

    return (
      <React.Fragment>
        <div className="wrap-item">
          {monstersList.map((item) => {
            return <RenderMonster2 {...item} />;
          })}
          {console.log(this.state)}
        </div>
      </React.Fragment>
    );
  }
}

export default MapTutorial2;
