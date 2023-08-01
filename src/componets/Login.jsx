import { useNavigate } from 'react-router-dom';
import NavBar from '../componets/navBar'
import Filter from '../componets/Filter'

const Login = () => {
    const navigate = useNavigate()

    return (
        <div>
            <NavBar/>
            <Filter/>
            <div className='login'>
                <div className='loginCabecera'>
                    <img src="src\assets\iconos\onlineShop.png"/>
                    <span>INICIAR SESION </span>
                </div>
                <ul className='userlist'>
                    <li>
                        Usuario
                    </li>
                    <input type="text" placeholder='Ingrese su usuario' />
                    <li>
                        Contraseña
                    </li>
                    <input type="pasword" placeholder='Ingrese su contraseña' />
                </ul> 
                <div className='botonIngresarlogin'>
                    <button>Ingresar</button>
                    <button onClick={()=>navigate(`/Register`)}>Registrarse</button>
                </div>
                <div className='iconoslogin'>
                    <box-icon type='logo' name='facebook-circle'></box-icon>
                    <box-icon type='logo' name='instagram-alt'></box-icon>
                    <box-icon type='solid' name='envelope'></box-icon>
                </div>
    
            </div>
        </div>
    );
};

export default Login;