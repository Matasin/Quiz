import React from'react';

export const ButtonNextQuestion = ( {currentQuestion, setCurrentQuestion, setCanSetPoint} ) => {
    const handleBothfunction = () => {
        setCanSetPoint(true);
        setCurrentQuestion(currentQuestion + 1)
    }
    return (
        <button 
            style= {{minWidth: '350px', maxWidth: '350px'}}
            onClick={handleBothfunction}
        > 
            Next Questions
        </button>
    )
}