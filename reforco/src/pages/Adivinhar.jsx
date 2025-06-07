import './Adivinhar.css'
import Voltar from '../components/Voltar'

export default function Adivinhar() {
    let aleatorio = Math.ceil(Math.random() * 10)
    let palpite = Number(prompt("Chuta um numero"))

    if (aleatorio === palpite) {
        alert("ACERTOU o numero " + aleatorio + " e voce chutou " + palpite)
    } else {
        alert("ERROU o numero era " + aleatorio + " e voce chutou " + palpite)
    }

    

    return (
        <>
            <div className='container-adivinhar'>
                <Voltar />
                <div className='adivinhar'>
                    <h1>Exercicios 1</h1>
                    <button onClick={Adivinhar}>Adivinhar</button>
                </div>

            </div>
        </>
    )
}


