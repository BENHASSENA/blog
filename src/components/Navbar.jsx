
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return(

        <nav>
            <ul>

                <li><NavLink to ="/" exact activeClassName="selected"> Accueil</NavLink></li>
                <li><NavLink to ="/apropos"  activeClassName="selected"> A propos</NavLink></li>
                <li><NavLink to ="/projets"  activeClassName="selected"> Projets</NavLink></li>
                <li><NavLink to ="/contact"  activeClassName="selected"> Contact </NavLink> </li>

            </ul>
        </nav>
    )
}

export default  Navbar