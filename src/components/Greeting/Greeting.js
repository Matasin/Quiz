import React from'react';
import './Greeting.css'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import { Header } from '../../General-Components/Header'


const Greeting = () => (
    <div className='Greeting'>
        <Header 
            Hindex= {'h1'}
            text= {'Hello, this is a simply quiz of random questions from any category and any level of difficulty'}
        />
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