// @flow
import React, { memo, lazy, Suspense } from 'react';
import styled, { css } from 'styled-components';

import './City.css';

type CityType = {
    name: string,
    to: string,
    subtitle?: string,
    start: string,
    end: string,
    timestamp?: number,
    current?: boolean
};

const Article = styled.article`
    ${props => css`
        background-image: url(./assets/${props.name}/${props.name}-mobile.jpg);
    `}

    @media (min-width: 640px) {
        ${props => css`
            background-image: url(./assets/${props.name}/${props.name}-desktop.jpg);
        `}
    }
`;

const Timer = lazy(() => import('../Timer'));

const City = memo(({ city }: CityType) => (
    <Article className='City' name={city.name}>
        <Suspense fallback={<p className='City__subtitle'>Loading ...</p>}>
            <div className='City__body'>
                <h1 className='City__name'>{city.to}</h1>
                {city.subtitle && <p className="City__subtitle">{city.subtitle}</p>}
                {city.current && <Timer start={city.timestamp} />}
                <p className='City__date'>{city.start} - {city.end}</p>
            </div>
        </Suspense>
    </Article>
));

export default City;
