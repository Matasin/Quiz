import React, { useState } from'react';
import './NumberQuestions.css'
import { CSSTransition } from 'react-transition-group'

import { Link } from 'react-router-dom'

const  NumberQuestions = () => {

    const [count, setCount] = useState(0);
    const countRef = React.createRef();

    const setCountOfQuestions = (event) => {
        const value = countRef.current.value;
        event.preventDefault();
        setCount(value)
    }
    return (
        <div className='NumberQuestions'>
            <CSSTransition
                in= { true }
                appear = { true }
                timeout= { 1000 }
                classNames= { 'A-opacity' }
            >
                <h1 className='Greeting-Header'>Before we start, please select number of questions you want to answer</h1>
            </CSSTransition>

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
                                count
                              }
                        }} 
                        
                    >
                        Go to questions
                    </Link>
                    
            </CSSTransition>

            <CSSTransition
                in= { true }
                appear = { true }
                timeout= { 2000 }
                classNames= { 'A-opacity' }
            >
                <div>
                    <h3 className='Greeting-Header'>
                        Remember, all question are completely random ( I'm talking about the difficulties of the task ) 
                    </h3>
                    <h5 
                        className='Greeting-Header'>So please dont be mad :) 
                    </h5>
                </div>
            </CSSTransition>

        </div>
    )
}


export default NumberQuestions;