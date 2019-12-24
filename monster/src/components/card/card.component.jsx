import React from 'react'

import './card.styles.scss'

export const Card = (props) => {
    return (
        <div class="card">
            <div class="imgBx">
                <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
                {/* URL parameter: 
                Must Remember. to write js code inside src you must use ( ` ) this sign not this ( ' ) */}
            </div>
            <div class="details">
                <h2>{ props.monster.name }<br></br><span>{ props.monster.email }</span></h2>
            </div>

        </div>
        
    );
}