import Home from '../Svg/Home';
import '../styles/styles.css';
import ArtiCraft from '../Svg/Articraft';
import Shop from '../Svg/Shop';
import About from '../Svg/About';
const Navbar = () => {


    return (

        <header className="nav-container">
            <h3 className="nav-heading">MUSEUMVERSE</h3>
            <nav className="nav">
                <a><Home />&nbsp;HOME</a>
                <a><ArtiCraft />&nbsp;ARTICRAFTS</a>
                <a><Shop />&nbsp;SHOP</a>
                <a><About />&nbsp;ABOUT</a>
            </nav>
        </header>
    )
}

export default Navbar;