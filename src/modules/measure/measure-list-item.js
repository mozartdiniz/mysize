import React from 'react';
import moment from 'moment';

const MeasureListItem = ( { item } ) => {

    return (
        <li className="mdc-list-item" data-key={item.key}>
            <label>{moment(item.datacriacao).format('DD/MM/YYYY HH:mm')} </label>
            <label> Peso: {item.peso} </label>
        </li>
    );
};

export default MeasureListItem;
