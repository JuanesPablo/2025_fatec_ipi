import React, { Component } from "react";
//rce
export class EstacaoClimatica extends Component {

    timer = null

    state = {
        data: null
    }

  ComponentDidMount() {
    this.timer = setInterval(() => {
        this.setState({data: new Date().toLocaleTimeString()})
        console.log('executando...')
    }, 1000)
    console.log(this.timer)
  }   

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex align-itens-center border rounded mb-2"
            style={{ height: "6rem" }}
          >
            <i className={`fa-solid fa-4x fa-${this.props.icone}`}></i>
            <p className="w-75 text-center border ms-3 fs-1">
              {this.props.estacao}
            </p>
          </div>
          <div>
            <p className="text-center">
              {
                this.props.latitude
                ? `Coordenadas: ${this.props.latitude}, ${this.props.longitudade}.
                  Data: ${this.state.data}`: `Clique no botão para saber a sua estão climática`
              }
            </p>
          </div>
          <button
            onClick={this.props.obterLocalizacao}
            className="btn btn-outline-primary w-100 mt-2"
          >
            Qual a Minha Estação?
          </button>
        </div>
      </div>
    );
  }
}
 

export default EstacaoClimatica;
