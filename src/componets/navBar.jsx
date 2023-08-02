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
                <div className="loginAndCart" >
                    <Link className="fa-sharp fa-solid fa-cart-shopping" to={'/cartShop'}></Link>
                    <Link className="fa-regular fa-user" to={'/login'} ></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;