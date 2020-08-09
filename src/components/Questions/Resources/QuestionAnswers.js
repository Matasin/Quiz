import React from'react';
import { CSSTransition } from 'react-transition-group'

export const QuestionAnswers = ( {arrayOfAnswers, checkIsCorrect} ) => {

    const shuffle = (array) => array.sort( () => Math.random - 0.5);
    shuffle(arrayOfAnswers)

    return (
        <div className='Question-Answers'>  
            {arrayOfAnswers.map( (answer, index) => {
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
}