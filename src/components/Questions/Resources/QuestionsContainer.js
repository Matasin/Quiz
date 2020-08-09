import React from'react';
import { QuestionAnswers } from './QuestionAnswers'

export const QuestionsContainer = ( {dataQuestion, currentQuestion, arrayOfAnswers, checkIsCorrect } ) => (
    <div className='Questions-Container'>
        <div className='Question-Info'>
            <p>
                Category: {dataQuestion[currentQuestion].category} 
                <i>({dataQuestion[currentQuestion].difficulty})</i> 
            </p>
        </div>
        <div className='Question-Question'>  
            <p>
                Question is: {dataQuestion[currentQuestion].question}
            </p>
        </div>
        <QuestionAnswers
            arrayOfAnswers= {arrayOfAnswers}
            checkIsCorrect= {checkIsCorrect}
        />
    </div>
)