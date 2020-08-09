import React from'react';
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

export const LinkToResults =  ( {currentQuestion, setCurrentQuestion, points, countOfMaxQuestion} ) => (
    <CSSTransition
        in= { true }
        appear = { true }
        timeout= { 500 }
        classNames= { 'A-btn' }
    >
        <Link
            to={{
                pathname: '/results',
                state: { 
                    points,
                    countOfMaxQuestion
                }
            }} 
            style= {{minWidth: '250px', maxWidth: '250px'}}
            onClick={ () => setCurrentQuestion( currentQuestion + 1)}
        > 
            See Your results
        </Link>
    </CSSTransition>
)
