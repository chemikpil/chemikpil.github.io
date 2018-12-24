// @flow

import React from 'react';

const css = (name: string) => ({
    backgroundImage: `url(./assets/${name}/${name}-icon.jpg)`
});


const MenuItem = ({ city, changeCity }) => {
    const clickHandler = () => {
        changeCity(city);
    }
    
    return (
        <li className='Menu__item' style={css(city.name)} onClick={clickHandler}>
            <div className='Menu__item__content'>
                <h4 className='Menu__item__title'>{city.to}</h4>
                <p className='Menu__item__date'>
                    {`${city.start} - ${city.end}`}
                </p>
            </div>
        </li>
    );
}

export default MenuItem;
