import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(0);
    return(
        <div>
            <p>Contador</p>
            <button onClick={ () => setContador(contador - 1) }>-</button>
            {contador}
            <button onClick={ () => setContador(contador + 1) }>+</button>
            <section>
            <button>Agregar al Carrito</button>
            </section>

            
        </div>
    
    );
}

export default ItemCount;