
import foto from '../assets/fqlogo2.png';
import CartWidget from './CartWidget';


const NavBar = () => {
    return(<div className='barraNav'>
            <img className='fotoNav' src={foto} />
            <div className='botonesNav'>
             <li><a href='#'>Home</a></li>
             <li><a href='#'>Productos</a></li>
             <li><a href='#'>Contacto</a></li>
             <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;