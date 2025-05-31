import './Adivinhar.css'

export default function Adivinhar() {
    let aleatorio = Math.ceil(Math.random() * 10)
    let palpite = Number(prompt("Chuta um numero"))

    if (aleatorio === palpite) {
        alert("Acertou essa bomba desse jogo 😡")
    } else {
        alert("ERRO OTÁRIO")
    }

    console.log(aleatorio)

    return (
        <>
            <div className='container-adivinhar'>
                <h1>Exercicios 1</h1>
                <button onClick={Adivinhar}>Adivinhar</button>
            </div>
        </>
    )
}


