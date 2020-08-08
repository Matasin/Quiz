import React from'react';
import { CSSTransition } from 'react-transition-group'

export const QuestionAnswers = ( {array, array2, checkIsCorrect} ) => (
    <div className='Question-Answers'>  
        {array.concat(array2).map( (answer, index) => {
            return (
                <CSSTransition
                    in= { true }
                    appear = { true }
                    timeout= { 500 }
                    classNames= { 'A-opacity' }
                    key={index}
                >
                    <button 
                        className='NumberQuestions-Keep-Going-Button'
                        style= {{minWidth: '200px'}}
                        onClick= {checkIsCorrect}
                        value={answer}
                    >
                        {answer}
                    </button>
                </CSSTransition>
            )
        })}
    </div>
)