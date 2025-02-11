import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

function ItemDetail ({item}) {
    return (
        <div className="card">
            <img src={item?.thumbnail} alt={item?.title} />
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div className="item-count">
                <ItemCount />
            </div>
        </div>
    );
}

export default ItemDetail;
