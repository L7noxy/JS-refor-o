import { useState } from "react"
import './MudarDia.css'

export default function MudarDia() {
    const [inputDia, setInputDia] = useState("")



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
            <div className="card-mudar-dia">
            <input
                type="text"
                value={inputDia}
                onChange={(e) => setInputDia(e.target.value)}
            />
            <button onClick={executar}>colocar um numero</button>

            <ul>         
                
                <li>segunda</li>
                <li>terca</li>
                <li>quarta</li>
                <li>quinta</li>
                <li>sexta</li>
                <li>sabado</li>
                <li>domingo</li>
                <li>dia invalido</li>
                

            </ul>
            </div>

        </div>
    )
}
