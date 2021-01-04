import React from 'react';

function Item(props) {

    return (
        <div className = "item" onClick = {() => props.handleClick(props.item.id)}>
            <img src={props.item.img_url} alt=""/>
            <span>{props.item.name}</span>
        </div>
    );
}

export default Item;