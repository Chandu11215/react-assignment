import Home from '../Svg/Home';
import '../styles/styles.css';
import ArtiCraft from '../Svg/Articraft';
import Shop from '../Svg/Shop';
import About from '../Svg/About';
const Navbar = () => {


    return (

        <header className="nav-container">
            <div><h3 className="nav-heading">MUSEUMVERSE</h3></div>
            <div className="nav">
                <p><Home />&nbsp;HOME</p>
                <p><ArtiCraft />&nbsp;ARTICRAFTS</p>
                <p><Shop />&nbsp;SHOP</p>
                <p><About />&nbsp;ABOUT</p>
            </div>
        </header>
    )
}

export default Navbar;