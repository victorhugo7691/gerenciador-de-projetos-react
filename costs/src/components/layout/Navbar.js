import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/cifrao.png'
import Container from './Conteiner'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" className={styles.tamanho_icone}/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/contact">Contact</Link></li>
                    <li className={styles.item}><Link to="/company">Company</Link></li>
                    <li className={styles.item}><Link to="/newproject">NewProject</Link></li>
                </ul>  
            </Container>
        </nav>
    )
}

export default Navbar;