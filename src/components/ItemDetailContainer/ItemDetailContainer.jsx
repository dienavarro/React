import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer (){
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setItem(res);
            setLoading(false);

        })
        .catch(err => {
            console.error('Error fetching product:', err);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        Object.keys(item).length > 0 ? <ItemDetail item={item} /> : <div>Producto no encontrado.</div>
    );
}

export default ItemDetailContainer;


