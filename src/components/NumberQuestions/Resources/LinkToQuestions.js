import React from 'react';
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

export const LinkToQuestions = ( {count, difficulty} ) => (
    <CSSTransition
        in= { true }
        appear = { true }
        timeout= { 100 }
        classNames= { 'A-btn' }
    >
        <Link 
            to={{
                pathname: 'questions',
                state: { 
                    count,
                    difficulty
                }
            }} 
        >
            Go to questions
        </Link>
        
    </CSSTransition>
)