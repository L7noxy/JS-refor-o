import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className='container-navbar'>
                <Link to={'/ganso'} >Ganso</Link>
                <Link to={'/adivinhar'} >Adivinhar</Link>
                <Link to={'/mudarDia'} >Mudar o Dia</Link>
                <Link to={'/arrays'}>Arrays</Link>
            </nav>
        </div>
    )
}
