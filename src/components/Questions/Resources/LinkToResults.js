import React from'react';
import { Link } from 'react-router-dom'


export const LinkToResults =  ( {currentQuestion, setCurrentQuestion, points, countOfMaxQuestion} ) => (
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
)
