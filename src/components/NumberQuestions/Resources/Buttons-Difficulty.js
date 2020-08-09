import React from 'react';
import { CSSTransition } from 'react-transition-group'

const buttonsDificulity = [
    'easy',
    'medium',
    'hard',
    'any'
]
export const ButtonsDifficulty = ( {setDifficulty} ) => (
    <div className='NumberQuestions-Buttons-Difficulty'>
        {buttonsDificulity.map( (level, key) => {
            return (
                <CSSTransition
                    in= { true }
                    appear = { true }
                    timeout= { 100 }
                    classNames= { 'A-btn' }
                    key= {key}
                >
                    <button
                        className='NumberQuestions-Input'
                        type='text' 
                        placeholder= {level}
                        onClick={() => setDifficulty(level)}
                    >
                        {level}
                    </button>
                </CSSTransition>
            )
        })}
    </div>
)