import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <nav>
        <Link to={'/ganso'} >Ganso</Link>
        <Link to={'/adivinhar'} >Adivinhar</Link>

      </nav>
    </div>
  )
}
