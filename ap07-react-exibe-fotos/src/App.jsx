import React, { Component } from 'react'
import Busca from './components/Busca'
//import { createClient } from 'pexels'
import PexelsLogo from './components/PexelsLogo'
import ListaImagens from './components/ListaImagens'
import pexelsClient from './utils/pexelsClient'
import Image from './components/Image'

export default class App extends Component {

  state = {
    photos: []
  }

  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: { 
        query: termo
      }
    })
    .then(result => {
      this.setState({ photos: result.data.photos })
    })
  }

  //pexelsClient = null
  //onBuscaRealizada = (termo) => {
  //  this.pexelsClient.photos.search({
  //    query: termo
  //  })
  //  .then(result => this.setState({ photos: result.photos }))
  //}

  componentDidMount() {
    //this.pexelsClient = createClient('zF6JtCRXfWcS2gudVP4REZjUvZw2tS4M8z4Q2VIQ8FvEOScfBjQiq6Aa')
  }
  render() {
    return (
      <div className='grid w-9 m-auto border-1 border-400'>
        <div className='col-12'>
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className='col-12'>
          <Busca 
            dica="Procurar..."
            onBuscarealizada={this.onBuscaRealizada}  
            />
        </div>
        <div className="col-12">
          <div className='grid'>
            <ListaImagens photos={this.state.photos} />
          </div>
        </div>
      </div>
    )
  }
}
