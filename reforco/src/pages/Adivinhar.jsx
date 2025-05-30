import React from 'react'

export default function Adivinhar() {
    let aleatorio = Math.ceil(Math.random() * 10)
    let palpite = Number(prompt("Chuta um numero"))

    console.log(aleatorio)
}

return (
    <>
        <div>
            <h1>Exercicios 1</h1>
            <button onClick={adivinhar}>Adivinhar</button>
        </div>
    </>
)
