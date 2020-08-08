import React from'react';

export const QuestionsCounter = ( {currentQuestion, countOfMaxQuestion} ) => (
    <div className='Questions-Counter'> 
        Question : {(currentQuestion + 1) + '/' + countOfMaxQuestion} 
    </div>
)