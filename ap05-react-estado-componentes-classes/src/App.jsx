export default function App() {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(`Deu certo: ${position.coords}`)
        },
        (err) => {
            console.log(`Erro: ${err}`)
        }
    )
    return(
        <div>
            <i className="fa-solid fa-cat"></i>
            <p>Testando..</p>
        </div>
    )
}
