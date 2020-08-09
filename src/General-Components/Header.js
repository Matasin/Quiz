import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Header = ({ Hindex, text }) => {
    return (
        <CSSTransition
            in= { true }
            appear = { true }
            timeout= { 1000 }
            classNames= { 'A-opacity' }
            >
            <Hindex className='Greeting-Header'>
                <p>
                    {text}
                </p>
            </Hindex>
        </CSSTransition>
    )
}
