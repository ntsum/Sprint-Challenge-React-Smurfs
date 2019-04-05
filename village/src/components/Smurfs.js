import React, { Component } from 'react';
import Smurf from './Smurf';
import Nav from './Nav';
class Smurfs extends Component {

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <div className="nav">
        <Nav />
        </div>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="yas">
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </div>
            );
          })}
        </ul>
      </div>
      
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;