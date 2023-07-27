import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navBar'>
            <Link className="logo" to={'/'}>
                <img src="src\assets\iconos\onlineShop.png" />
                <h1>WEB STORE</h1>
            </Link>
            
            <div className='navBar_icon'>
                <div className='search'>
                    <input type="text" placeholder='Buscar'/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <Link className="loginAndCart" to={'/login'}>
                    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-user" ></i>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;