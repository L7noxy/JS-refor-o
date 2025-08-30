import React, { useState } from 'react'
import './Romero.css'

export default function Romero() {

  const produtos = [
    {
      id: 1,
      nome: "teste1",
      preco_promo: 0,
      preco: 5,
      antigo: true
    },
    {
      id: 1,
      nome: "teste1",
      preco_promo: 0,
      preco: 5,
      antigo: false
    },
    {
      id: 1,
      nome: "teste1",
      preco_promo: 0,
      preco: 5,
      antigo: true
    },
    {
      id: 1,
      nome: "teste1",
      preco_promo: 0,
      preco: 5,
      antigo: false
    },
  ]
  return (
    <div>
      <ul>
        {produtos.map((produto) => (
          <div key={produto.id}>
            <div className='card-produto'>
              <div>{produto.nome}</div>
              <div>{produto.preco_promo}</div>
              <div>{produto.preco}</div>
              <div>{produto.antigo ? "Antigo" : "Novo"}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
