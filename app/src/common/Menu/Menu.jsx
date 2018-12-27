import React, { PureComponent } from 'react';
import MenuItem from './MenuItem';

import history from '../../store/history';
import incoming from '../../store/incoming'; 

import './Menu.css';

type ItemType = {
    id: number,
    name: string,
    to: string,
    start: string,
    end: string
};

class Menu extends PureComponent {
    getList = list => (
        <ul className='Menu__list'>
            {list.map((item: ItemType) => <MenuItem
                city={item}
                key={`past-${item.id}`}
                changeCity={this.props.changeCity}
            />)}
        </ul>
    );

    render () {
        const current = [this.props.current, ...incoming];

        return (
            <div className='Menu'>
                {current.length > 0 && <>
                    <h3 className='Menu__header'>Incoming travels</h3>
                    {this.getList(current)}
                </>}
                <h3 className='Menu__header'>Past travels</h3>
                {this.getList(history)}
            </div>
        )
    }
}

export default Menu;
