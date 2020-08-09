import React, {  } from'react';
import './Results.css'

import { ResultsScore } from './Resources/Results-Score'
import { Header } from '../../General-Components/Header'

const Results = ( props ) => {
    const score = props.location.state.points;
    const countOfMaxQuestion = props.location.state.countOfMaxQuestion;
    return (
        <div className='Results'>
            <Header
                Hindex= { 'h2' }
                text= { 'There is your results' }
            />
            <div className='Results-Container'>
                <ResultsScore
                    score= { score }
                    countOfMaxQuestion= { countOfMaxQuestion }
                />
            </div>
        </div>
    )
}

export default Results