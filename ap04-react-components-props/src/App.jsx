import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Hippo from "./hippo"
import Feedback from "./assets/Feedback"

const App = () => {
  const textoOK = "Já Chegou!"
  const textoNOK = "Ainda não chegou!"
  const funcaoOK = () => alert('Obrigado pelo Feedback!')
  const funcaoNOK = () => alert('Vamos verificar!')
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      funcaoOK={funcaoOK}
      textoNOK={textoNOK}
      funcaoNOK={funcaoNOK}/>)
  const pedidos = [
    {
      data: "22/08/2025",
      icone: "fa-solid fa-hdd",
      titulo: "SSD",
      descricao: "SSD 512Gb"
    },
    {
      data: "21/08/2025",
      icone: "fa-solid fa-book",
      titulo: "Concrete Maths",
      descricao: "Autor Donald Knuth"
    },
    {
      data: "20/08/2025",
      icone: "fa-solid fa-hippo",
      titulo: "Hipopótamo",
      descricao: "Filhote de Hipopótamo"
    },
    {
      data: "19/08/2025",
      icone: "fa-solid fa-gem",
      titulo: "Diamante",
      descricao: "Diamante Transparente"
    },
  ]
  return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Hippo size='fa-3x'/>
          <span className="mx-1"></span>
          <Hippo 
            size='fa-2x'
            rotate='fa-flip-horizontal'/>
        </div>
      </div>
      <div className="row">
        {
          pedidos.map(pedido => (
            <div className="col-12 col-lg-6 col-xxl-3">
              <Cartao
                className="mb-2"
                cabecalho={pedido.data}>
                <Pedido 
                  icone={pedido.icone} 
                  titulo={pedido.titulo} 
                  descricao={pedido.descricao}/>
                  {componenteFeedback}
              </Cartao>
            </div>
          ) )
        }  
      </div>
    </div>
  )
}

export default App
