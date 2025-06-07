import { useState } from "react"
import './MudarDia.css'
import Voltar from "../components/Voltar"

export default function MudarDia() {
    const [inputDia, setInputDia] = useState("")

    function executarArray() {
        let diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo", "Dia inválido"]
        let diaDaSemanaAleatorio = Math.ceil(Math.random() * 7)
        alert(diasDaSemana[diaDaSemanaAleatorio])
    }

    function executar() {

        let diaDaSemanaAleatorio = Math.ceil(Math.random() * 8)
        switch (diaDaSemanaAleatorio) {
            case 1:
                alert("Segunda-feira");
                break;
            case 2:
                alert("Terça-feira");
                break;
            case 3:
                alert("Quarta-feira");
                break;
            case 4:
                alert("Quinta-feira");
                break;
            case 5:
                alert("Sexta-feira");
                break;
            case 6:
                alert("Sábado");
                break;
            case 7:
                alert("Domingo");
                break;
            default:
                alert("Dia inválido");
        }
    }

    return (
        <div className="container-mudar-dia">
            <Voltar />
            <div className="card-mudar-dia">
                <input
                    type="text"
                    value={inputDia}
                    onChange={(e) => setInputDia(e.target.value)}
                />
                <button className="button-mudar-dia" onClick={executarArray} >colocar um numero</button>

                <ul>

                    <li> 1 - segunda</li>
                    <li> 2 - terca</li>
                    <li> 3 - quarta</li>
                    <li> 4 - quinta</li>
                    <li> 5 - sexta</li>
                    <li> 6 - sabado</li>
                    <li> 7 - domingo</li>
                    <li> 8 - dia invalido</li>


                </ul>
            </div>

        </div>
    )
}
