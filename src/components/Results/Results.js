import React, {  } from'react';
import './Results.css'

const Results = ( props ) => {
    const score = props.location.state.points;
    const countOfMaxQuestion = props.location.state.countOfMaxQuestion;
    return (
        <div className='Results'>
            <div className='Results-Container'>
                <div className='Score-Score'>Your score: {score}</div>
                <div className='Score-CountOfMaxQuestion'>Question/s: {countOfMaxQuestion}</div>
                <div className='Score-Percentage-Score'>Accuracy: {Math.round(score / countOfMaxQuestion * 100)+ '%' }  </div>
            </div>
        </div>
    )
}

export default Results