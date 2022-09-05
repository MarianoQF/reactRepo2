import carrito from '../assets/carritoNav3.png';


const CartWidget = () => {
    return(
        <div className='carritoNav'>
            <a href="#"><img src={carrito} /></a>
        </div>
    );
}

export default CartWidget;