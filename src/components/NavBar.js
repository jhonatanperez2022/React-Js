import "./NavBar.css";
import CartWidget from './CartWidget';

const NavBar = () => {
    return <div className="navbar-base">
                <div className="navbar-container">
        <h2>Trico Juegos</h2>
        <button className="buttons-navbar">Categorias</button>
        <button className="buttons-navbar">Plataformas</button>
        <button className="buttons-navbar">Contactos</button>
        <CartWidget/>
            </div>
            </div>;
};

export default NavBar;