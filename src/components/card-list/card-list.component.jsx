import React from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

const CardList = (props) => {
    return(
        <div className="card-list">
            {props.monsters.map( mon => (
                <Card key={mon.id} monster={mon}/>
            ))}
        </div>
    );
}

export default CardList;