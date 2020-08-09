import React from'react';
import { CSSTransition } from 'react-transition-group'

export const ButtonNextQuestion = ( {currentQuestion, setCurrentQuestion, setCanSetPoint} ) => {
    const handleBothfunction = () => {
        setCanSetPoint(true);
        setCurrentQuestion(currentQuestion + 1)
    }
    return (
        <CSSTransition
            in= { true }
            appear = { true }
            timeout= { 500 }
            classNames= { 'A-btn' }
        >
            <button 
                style= {{minWidth: '350px', maxWidth: '350px'}}
                onClick={handleBothfunction}
            > 
                Next Questions
            </button>
        </CSSTransition>
    )
}