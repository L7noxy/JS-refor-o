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
    <div className="container-card">
      <h1>Card de produtos</h1>
      <ul className="lista-produtos">
        {produtos.map((produto) => (
          <li key={produto.id} className="item-produto">
            <article className="card-produto">
              <h3 className="produto-nome">{produto.nome}</h3>
              <p className="produto-preco-promocao">Promo: R$ {produto.preco_promo}</p>
              <p className="produto-preco">Preço original: R$ {produto.preco}</p>
              <span className={`produto-status ${produto.antigo ? 'antigo' : 'novo'}`}>
                {produto.antigo ? 'Antigo' : 'Novo'}
              </span>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
