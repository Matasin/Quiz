import React, { useState, useEffect } from'react';
import './Questions.css'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

const Questions = ( props ) => {
    const countOfMaxQuestion = props.location.state.count;
    const [dataQuestion, setDataQuestion] = useState('Error with loading data');    
    const [currentQuestion , setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0); 
    const [canSetPoint, setCanSetPoint] = useState(true);

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${countOfMaxQuestion}`)
        // fetch(`https://opentdb.com/api.php?amount=` + countOfMaxQuestion) // dunno why but its work
            .then(response => response.json())
            .then(data => setDataQuestion(data.results));
    }, [countOfMaxQuestion])

    // Create array to add incorect answers and then scale 2arrays, really dunoo its just worked so... XD
    const array = []; 
    const array2 = dataQuestion[currentQuestion].incorrect_answers;
    // Add corect answer
    array.push(dataQuestion[currentQuestion].correct_answer)

    const checkIsCorrect = (event) => {
        const value = event.target.value
        const correctAnswer = dataQuestion[currentQuestion].correct_answer;
        if(canSetPoint === true) {
            value === correctAnswer ?
            setPoints(points + 1)
            :
            setPoints(points)
        };
        setCanSetPoint(false)
    }
    return (
        <div className='Questions'>
            <div className='Questions-Counter'> 
                Question : {(currentQuestion + 1) + '/' + countOfMaxQuestion} 
                {/* {'Your points: ' + points} */}
            </div>
            <div className='Questions-Container'>
                <div className='Question-Info'>
                    <p>{dataQuestion[currentQuestion].category} ({dataQuestion[currentQuestion].difficulty}) </p>
                </div>
                <div className='Question-Question'>  
                    <p>{dataQuestion[currentQuestion].question}</p>
                </div>
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
            </div>
            {
                currentQuestion + 1 >= countOfMaxQuestion 
                ? 
                    <CSSTransition
                        in= { true }
                        appear = { true }
                        timeout= { 500 }
                        classNames= { 'A-btn' }
                    >
                        <LinkToResults 
                            currentQuestion={currentQuestion}
                            setCurrentQuestion={setCurrentQuestion}
                            points= {points}
                            countOfMaxQuestion = {countOfMaxQuestion}
                        />
                    </CSSTransition>
                    : 
                    <CSSTransition
                        in= { true }
                        appear = { true }
                        timeout= { 500 }
                        classNames= { 'A-btn' }
                    >
                        <ButtonNextQuestion
                            currentQuestion= {currentQuestion}
                            setCurrentQuestion= {setCurrentQuestion}
                            setCanSetPoint= {setCanSetPoint}
                        />
                    </CSSTransition>
            }
        </div>
    )
}
const ButtonNextQuestion = ({currentQuestion, setCurrentQuestion, setCanSetPoint}) => {
    const handleBothfunction = () => {
        setCanSetPoint(true);
        setCurrentQuestion(currentQuestion + 1)
    }
    return (
        <button 
            to='results'
            style= {{minWidth: '350px', maxWidth: '350px'}}
            onClick={handleBothfunction}
        > 
            Next Questions
        </button>
    )
}
const LinkToResults=  ({currentQuestion, setCurrentQuestion, points, countOfMaxQuestion}) => (
    <Link
        to={{
            pathname: '/results',
            state: { 
                points,
                countOfMaxQuestion
            }
        }} 
        style= {{minWidth: '250px', maxWidth: '250px'}}
        onClick={ () => setCurrentQuestion( currentQuestion + 1)}
    > 
        See Your results
    </Link>
)


export default Questions;