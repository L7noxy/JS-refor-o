import { Link } from "react-router-dom"
import './Voltar.css'
import { IoIosArrowRoundBack } from "react-icons/io";

export default function voltar() {
    return (
        <div className="container-voltar">
            <Link to={'/'}><IoIosArrowRoundBack color="white" size={50}/></Link>
        </div>
    ) 
}
