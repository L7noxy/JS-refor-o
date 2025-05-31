import React from 'react'
import { useState } from 'react'
import './Ganso.css'


export default function Ganso() {
    // const [valor, setValor] = useState(99);
    const [inputMarujos, setInputMarujos] = useState('')
    const [inputEventos, setInputEventos] = useState('')
    const [viagem, setViagem] = useState('')

    function verificar() {
        if (inputMarujos >= 10 || inputEventos >= 1) {
            alert("viajar")
        } else {
            alert("Ficar em casa")
        }
    }

    return (
        <div className='container-ganso'>
            <div>
                {/* {valor} */}
                <h2>EX. 9 - Capitão Ganso</h2>
                <button onClick={() => setValor(valor + 1)}>+</button>
                <input type="text"
                    value={inputMarujos}
                    onChange={(e) => setInputMarujos(e.target.value)}
                />

                <p> input: {inputMarujos}</p>

                <p>Eventos</p>
                <input type="text" 
                value={inputEventos}
                onChange={(e) => setInputEventos(e.target.value)}
                />
                <button onClick={verificar}>Verificar</button>
               <p>Viagem: {inputEventos}</p> 

            </div>

        </div>
    )
}
