class articulo {
    constructor(id,nombre,descripcion,stock) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
    }
}

export const getProductos = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            const articulos = [new articulo(1,"Cepillo Colgate 360","Cepillo de dientes Colgate",10),new articulo(2,"Colgate Luminus white","Pasta de dientes Colgate",8)]
            resolve(articulos);
            },2000);

        });

    return task;
};
