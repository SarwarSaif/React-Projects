import React from 'react';

import './shop.styles.scss'

import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor (props) {
        super();

        this.state = {
            collections: SHOP_DATA
              
        }; // End of state

    } // end of constructor  

    render() {
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(
                        ({id, ...othersCollectionProps}) => (
                            <CollectionPreview 
                                key={id}
                                {...othersCollectionProps}
                            />
                        )
                    )
                }
                
            </div>
            
        );
    }
}

export default ShopPage;
