import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemList.css';


export const ItemList = ({producto, initial, stock}) => {

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };

    return(
        <div className='ItemList'>
            <h3>{producto}</h3>
            <ItemCount onAdd={onAdd} initial={initial} stock={stock} /> 
        </div> 
    )
}

export default ItemList;