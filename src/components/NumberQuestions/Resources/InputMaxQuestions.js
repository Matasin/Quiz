import React from 'react';
import { CSSTransition } from 'react-transition-group'

export const InputMaxQuestions = ( {countRef, setCountOfQuestions} ) => (
    <div className='Greeting-Keep-Going-Container'>
        <CSSTransition
            in= { true }
            appear = { true }
            timeout= { 2000 }
            classNames= { 'A-opacity' }
        >
            <input 
                className='NumberQuestions-Input'
                type='number' 
                placeholder='0-50'
                ref={countRef}
                onChange={setCountOfQuestions}
            />
        </CSSTransition>
    </div>
)