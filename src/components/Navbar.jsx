
import { Link } from 'react-router-dom'


const Navbar = () => {
    return(

        <nav>
            <ul>

                <li> <Link> <a href="#">Accueil</a> </Link> </li>
                <li> <Link> <a href="#" >Projets</a> </Link> </li>
                <li> <Link> <a href="#">A Propos</a> </Link> </li>
                <li> <Link> <a href="#">Contact</a> </Link> </li>

            </ul>
        </nav>
    )
}

export default  Navbar