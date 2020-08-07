import React from'react';
import './Greeting.css'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

const Greeting = () => (
    <div className='Greeting'>
        <CSSTransition
                in= { true }
                appear = { true }
                timeout= { 1000 }
                classNames= { 'A-opacity' }
            >
            <h1 className='Greeting-Header'>Hello, this is a simply quiz of random questions from any category and any level of difficulty </h1>
        </CSSTransition>
        <div className='Greeting-Keep-Going-Container'>
            <CSSTransition
                in= { true }
                appear = { true }
                timeout= { 100 }
                classNames= { 'A-btn' }
            >
                <Link to='count_questions'>
                    Go to quiz
                </Link>
            </CSSTransition>
        </div>
    </div>
)


export default Greeting;