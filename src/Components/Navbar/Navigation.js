/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import About from '../Svg/About';
import ArtiCraft from '../Svg/Articraft';
import Home from '../Svg/Home';
import Shop from '../Svg/Shop';
import './NavStyles.css';

const Navigation = () => {

    const [clicked, setClicked ] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <>
            <nav>
                <a className="Nav" href="#">MUSEUMVERSE</a>
                <div>
                    <ul id='navbar' className={clicked ? '#navbar active' : '#navbar'}>
                        <li><a href="#"><Home />&nbsp;HOME</a></li>
                        <li><a href="#"><ArtiCraft />&nbsp;ARTICRAFTS</a></li>
                        <li><a href="#"><Shop/>&nbsp;SHOP</a></li>
                        <li><a href="#"><About/>&nbsp;ABOUT</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}>
                    </i>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
