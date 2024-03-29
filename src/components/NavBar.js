import "./NavBar.css";
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";


const NavBar = () => {
    return <div className="navbar-base">
                <div className="navbar-container">
                    <Link to="/" className="navbarH2">
                        TRICO JUEGOS
                    </Link>
                    <Link to="/contactos" className="buttons-navbar">
                        Contactos
                    </Link>                   
                    <CartWidget/>
                </div>
            </div>;
};

export default NavBar;