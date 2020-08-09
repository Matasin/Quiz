import React from'react';
import { QuestionAnswers } from './QuestionAnswers'

export const QuestionsContainer = ( {dataQuestion, currentQuestion, array, array2, checkIsCorrect, shuffle } ) => (
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
            array= {array}
            array2= {array2}
            checkIsCorrect= {checkIsCorrect}
            shuffle= {shuffle}
        />
    </div>
)