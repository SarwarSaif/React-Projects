import React from 'react'

import './card-list.styles.scss'

import { Card } from '../card/card.component'

export const CardList = (props) => {
    return(
            <div className='body'>
                <div className='card-list'> 
                {props.monsters.map(monster => (
                    <Card name = 'Sarwar' key={monster.id} monster={monster}></Card>
                ))}
                  
                    {/* Key is used to let the react know that
                        it doesn't need to re-render everything. 
                    It can just change the associated element */}
                </div>
            </div>
    );
}