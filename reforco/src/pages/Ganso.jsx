import React from 'react'
import { useState } from 'react'
import './Ganso.css'
import Voltar from '../components/Voltar'


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
            <Voltar />
            <div className='fundo-ganso'>
                <h2>EX. 9 - Capitão Ganso</h2>

                <div className='container-ipts-ganso'>
                    <div className='marujos'>
                        {/* {valor} */}

                        {/* <button onClick={() => setValor(valor + 1)}>+</button> */}

                        <p>Marujos:</p>
                        <input type="number"
                            value={inputMarujos}
                            onChange={(e) => setInputMarujos(e.target.value)}
                        />

                        <p> input: {inputMarujos}</p>
                    </div>

                    <div className='eventos'>
                        <p>Eventos:</p>
                        <input type="number"
                            value={inputEventos}
                            onChange={(e) => setInputEventos(e.target.value)}
                        />
                        <p>Viagem: {inputEventos}</p>

                    </div>
                    
                    <button onClick={verificar} className='verificar-viagem'>Verificar</button>
                </div>



            </div>

        </div>
    )
}
