import React, { Component } from 'react'

export class Cat extends Component {
  render() {
    return (
      <i className={`fa-solid fa-cat fa-${this.props.tamanho}x fa-flip-${this.props.direcao}`}></i>
    )
  }
}

export default Cat