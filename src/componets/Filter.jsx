import { Link } from "react-router-dom";

const Filter = () => {

    return (
        <div className='filter'>
            <ul className='lista'>
                <Link className="li" to={'/tecnologia'}>
                    TECNOLOGIA
                </Link>
                <Link className="li"  to={'/joyeria'}>
                    JOYERIA
                </Link>
                <Link className="li"  to={'/ropaHombre'}>
                    ROPA DE HOMBRE
                </Link>
                <Link className="li" to={'/ropaMujer'}>
                    ROPA DE MUJER
                </Link>
            </ul>
                <div className='info'>
                <box-icon name='info-circle'></box-icon>
                <Link className="a" to={'/sobreNosotros'}>Sobre Nosotros</Link>
            </div>
        </div>
    );
};

export default Filter;
