import React, { useState, lazy, Suspense } from 'react';

import logo from './logo.png';

import './Header.css';

const Menu = lazy(() => import('../Menu'));

const Header = ({ current, changeCity }) => {
    const [open, setOpen] = useState(false);

    const changeCityHandler = (city) => {
        setOpen(!open);
        changeCity(city)
    };

    return (
        <>
            <header className='Header'>
                <img src={logo} alt='Podróniczki' height='40' />
                <button 
                    className='Header__button'
                    onClick={() => setOpen(!open)}
                >history</button>
            </header>
            {
                open && <div className='Header__menu'>
                    <Suspense fallback={<p className='Header__loading'>Loading ...</p>}>
                        <Menu current={current} changeCity={changeCityHandler} />
                    </Suspense>
                </div>
            }
        </>
    );
};

export default Header;
