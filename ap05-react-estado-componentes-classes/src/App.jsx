import React from "react";
import Cat from "./Cat";
import EstacaoClimatica from "./EstacaoClimatica";
class App extends React.Component {

    constructor(props) {
      super(props)
    //  this.state = {
    //    latitude: null,
    //    longitudade: null,
    //    estacao: null,
    //    data: null,
    //    icone: null,
    //    mensagemDeErro: null
    //  }
      console.log('constructor')
    }

    state = {
        latitude: null,
        longitudade: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeErro: null
      }

    componentDidMount() { 
      console.log('componentDidMount')
     // this.obterLocalizacao()
    }

    componentDidUpdate() {
      console.log('componentDidUpdate')
    }

    componentWillUnmount() {
      console.log('componentWillUnmount')
    }

    icones = {
        'Primavera': 'flower',
        'Verão': 'sun',
        'Outono': 'leaf',
        'Inverno': 'snowflake'
    }

    obterEstacao = (dataAtual, latitude) => {
        const anoAtual = dataAtual.getFullYear();
        const d4 = new Date(anoAtual, 2, 21);
        const d1 = new Date(anoAtual, 5, 21);
        const d2 = new Date(anoAtual, 8, 23);
        const d3 = new Date(anoAtual, 11, 22);

        const estaNoSul = latitude < 0 
        if (dataAtual >= d1 && dataAtual < d2) {
            return estaNoSul ? 'Inverno' : 'Verão';
        }
        if (dataAtual >= d2 && dataAtual < d3) {
            return estaNoSul ? 'Primavera' : 'Outono';
        }
        if (dataAtual >= d3 || dataAtual < d1) {
            return estaNoSul ? 'Verão' : 'Inverno';
        }
        return estaNoSul ? 'Outono' : 'Primavera';
    }

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                const dataAtual = new Date();
                const estacao = this.obterEstacao(dataAtual, position.coords.latitude);
                const icone = this.icones[estacao];
                this.setState({
                    latitude: position.coords.latitude,
                    longitudade: position.coords.longitude,
                    estacao: estacao,
                    data: dataAtual.toLocaleDateString(),
                    icone: icone
                })
            },
            (erro) => {
                console.log(erro)
                this.setState({mensagemDeErro: 'Tente novamente mais tarde'})
            }
        )   
    }

    render() {
      return(
        <div className="container mt-2">
          <div className="row">
            <div className="col-12">
              <Cat tamanho="3"/>
              <Cat tamanho="3" direcao="horizontal"/>
            </div>    
          </div>
          <div className="row">
            <div className="col-12">
              {
                (!this.state.latitude && !this.state.mensagemDeErro) ?
                  <Loading texto='Por favor, libere o acesso a sua localização.'/>
                :
                this.state.mensagemDeErro ?
                <p className="border rounded p-2 fs-1 text-center">
                  É preciso dar permissão de acesso à localização.
                  Atualize a página e tente de novo, ajustando as 
                  configurações do seu navegador.
                </p>    
                :
                <EstacaoClimatica
                  latitude={this.state.latitude}
                  longitudade={this.state.longitudade}
                  estacao={this.state.estacao}
                  data={this.state.data}
                  icone={this.state.icone}
                  obterLocalizacao={this.obterLocalizacao}/>
              }
            </div>
          </div>
        </div>
      )
    }
}

export default App;
