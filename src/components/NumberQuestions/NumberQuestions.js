import React, { useState } from'react';
import './NumberQuestions.css'
import { CSSTransition } from 'react-transition-group'

import { Link } from 'react-router-dom'

const NumberQuestions = () => {

    const [count, setCount] = useState(10);
    const [difficulty, setDifficulty] = useState('any');
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
                <h2 className='Greeting-Header'>
                    Before we start, please select number of questions and difficulty you want to answer
                </h2>
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

            <div className='NumberQuestions-Buttons-Difficulty'>
            {buttonDificulity.map( (level, key) => {
                return (
                    <button
                        className='NumberQuestions-Input'
                        type='text' 
                        placeholder= {level}
                        onClick={() => setDifficulty(level)}
                        key= {key}
                    >
                        {level}
                    </button>
                )
            })}
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
                                count,
                                difficulty
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
                        <p>Default "Any" category and 10 questions</p>
                    </h3>
                </div>
            </CSSTransition>

        </div>
    )
}
const buttonDificulity = [
    'easy',
    'medium',
    'hard',
    'any'
]


export default NumberQuestions;