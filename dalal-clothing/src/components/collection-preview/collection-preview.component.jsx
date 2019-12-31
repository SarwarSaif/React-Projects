import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <div className="preview">
            {
                items
                    .filter((item,idx) => idx <4) // To get the first 4 items
                    .map(
                        ({id, ...othersCollectionItemProps}) => (
                            <CollectionItem
                                key={id}
                                {...othersCollectionItemProps}
                            />
                            
                        ) 
                    )
            }
        </div>
    </div>
);

export default CollectionPreview;