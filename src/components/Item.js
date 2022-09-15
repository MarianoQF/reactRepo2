import { getProductos } from "../app/api";
import { useEffect, useState } from "react";

class articulo {
    constructor(id,nombre,descripcion,stock) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
    }
}

const Item = ({callBack}) => {
    const[art,setArt] = useState ([]);

    useEffect(() =>{
        getProductos().then((articulos) => {
            console.log(articulos);
            setArt(articulos);
         })
        .catch(() => {
            console.log("Task error");
        })
    }, []);


return (
    <div>
        {articulo.map(articulo =>
           <p>{articulo.nombre}</p>)
           }
    </div>
)
}
export default Item;
