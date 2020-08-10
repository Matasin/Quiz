import React from'react';
import { CSSTransition } from 'react-transition-group'

export const QuestionAnswers = ( {arrayOfAnswers, checkIsCorrect} ) => {
    const shuffle = ( array ) => array.sort(() => Math.random() - 0.25);
    return (
        <div className='Question-Answers'>  
            {shuffle(arrayOfAnswers).map( (answer, index) => {
                return (
                    <CSSTransition
                        in= { true }
                        appear = { true }
                        timeout= { 500 }
                        classNames= { 'A-opacity' }
                        key={ index }
                    >
                        <button 
                            className='NumberQuestions-Keep-Going-Button'
                            style= {{ minWidth: '200px'} }
                            value={ answer }
                            onClick= { checkIsCorrect }
                        >
                            { answer }
                        </button>
                    </CSSTransition>
                )
            })}
        </div>
    )
}