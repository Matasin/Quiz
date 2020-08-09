import React from'react';
import { QuestionAnswers } from './QuestionAnswers'

export const QuestionsContainer = ( {dataQuestion, currentQuestion, arrayOfAnswers, checkIsCorrect } ) => (
    <div className='Questions-Container'>
        <div className='Question-Info'>
            <div>
                Category: <span style={{color: '#00C851'}}> {dataQuestion[currentQuestion].category} </span>
                <i>({dataQuestion[currentQuestion].difficulty})</i> 
            </div>
        </div>
        <div className='Question-Question'>  
            <div>
                Question is: 
                    <div style={{color: '#ff4444'}}>
                        {dataQuestion[currentQuestion].question}
                    </div>
            </div>
        </div>
        <QuestionAnswers
            arrayOfAnswers= {arrayOfAnswers}
            checkIsCorrect= {checkIsCorrect}
        />
    </div>
)