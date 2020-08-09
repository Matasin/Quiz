import React from 'react';

export const ResultsScore = ( {score, countOfMaxQuestion} ) => {   
    return (
        <div className='Results-Score'>
            <p> Your score: {score}/{countOfMaxQuestion} </p>
            <p> Accuracy: {Math.round(score / countOfMaxQuestion * 100) + '%' } </p>
        </div>
    )

}