import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    // Children is what passed in between the <CardList> and </CardList>
    
    <div className = "card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);