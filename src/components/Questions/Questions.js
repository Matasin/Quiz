import React, { useState, useEffect } from'react';
import './Questions.css'
import { CSSTransition } from 'react-transition-group'

import { QuestionsCounter } from './Resources/QuestionsCounter'
import { QuestionsContainer } from './Resources/QuestionsContainer'
import { ButtonNextQuestion } from './Resources/ButtonNextQuestion'
import { LinkToResults } from './Resources/LinkToResults'


const Questions = ( props ) => {
    const countOfMaxQuestion = props.location.state.count;
    const [dataQuestion, setDataQuestion] = useState('Error with loading data');    
    const [currentQuestion , setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0); 
    const [canSetPoint, setCanSetPoint] = useState(true);

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${countOfMaxQuestion}`)
            .then(response => response.json())
            .then(data => setDataQuestion(data.results));
    }, [countOfMaxQuestion])

    const shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }
    // Create array to add incorect answers and then scale 2arrays, really dunoo its just worked so... XD
    const array = []; 
    const array2 = dataQuestion[currentQuestion].incorrect_answers;
    // Add corect answer
    array.push(dataQuestion[currentQuestion].correct_answer)

    const checkIsCorrect = (event) => {
        const value = event.target.value
        const correctAnswer = dataQuestion[currentQuestion].correct_answer;
        if(canSetPoint === true && value === correctAnswer) {
            setCanSetPoint(false);
            return setPoints(points + 1);
        }
        setCanSetPoint(true);
        // console.log(canSetPoint)
        return points === 0 ? setPoints(points) : setPoints(points-1);
    }
    return (
        <div className='Questions'>
            {/* { 'points ' +  points} */}
            {/* Count of question */}
            <QuestionsCounter 
                currentQuestion= {currentQuestion}
                countOfMaxQuestion= {countOfMaxQuestion}
            />
            {/* Container with info about Category and question + anwers */}
            <QuestionsContainer
                dataQuestion= {dataQuestion}
                currentQuestion= {currentQuestion}
                array= {array}
                array2= {array2}
                checkIsCorrect= {checkIsCorrect}
                shuffle= {shuffle}
            />

            {/* Condition who is showing button or link to result depends on the points  */}
            {currentQuestion + 1 >= countOfMaxQuestion ? 
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


export default Questions;