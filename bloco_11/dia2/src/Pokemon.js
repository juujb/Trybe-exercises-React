import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div>
        <span>{name}</span>
        <span>{type}</span>
        <span>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</span>
        <img src={image} alt={name}></img>
      </div>
    );
  }
}

export default Pokemon;
