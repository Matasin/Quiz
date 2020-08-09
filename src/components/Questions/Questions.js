import React, { useState, useEffect } from'react';
import './Questions.css'

import { QuestionsCounter } from './Resources/QuestionsCounter'
import { QuestionsContainer } from './Resources/QuestionsContainer'
import { ButtonNextQuestion } from './Resources/ButtonNextQuestion'
import { LinkToResults } from './Resources/LinkToResults'


const Questions = ( props ) => {

    const countOfMaxQuestion = props.location.state.count;
    const difficulty = props.location.state.difficulty;

    const [dataQuestion, setDataQuestion] = useState('Error with loading data');    
    const [currentQuestion , setCurrentQuestion] = useState(0);
    const [points, setPoints] = useState(0);

    const [canSetPoint, setCanSetPoint] = useState(true);
    
    useEffect(() => {
        (
            difficulty === 'any' ? 
            fetch(`https://opentdb.com/api.php?amount=${countOfMaxQuestion}`) 
            : 
            fetch(`https://opentdb.com/api.php?amount=${countOfMaxQuestion}&difficulty=${difficulty}`)
        )
            .then(response => response.json())
            .then(data => setDataQuestion(data.results));
    }, [countOfMaxQuestion,difficulty])

    // Create 2 testArrays for add this to one correct array
    const TestArray = []; 
    // Add corect answer
    TestArray.push(dataQuestion[currentQuestion].correct_answer)
    // Add incorect answer
    const TestArray2 = dataQuestion[currentQuestion].incorrect_answers;
    //Scale arrays
    const arrayOfAnswers = TestArray.concat(TestArray2);
    
    const checkIsCorrect = (event) => {
        const value = event.target.value
        const correctAnswer = dataQuestion[currentQuestion].correct_answer;
        if(canSetPoint === true && value === correctAnswer) {
            setCanSetPoint(false);
            return setPoints(points + 1);
        }
        return setCanSetPoint(true)
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
                arrayOfAnswers= {arrayOfAnswers}
                checkIsCorrect= {checkIsCorrect}
            />

            {/* Condition who is showing button or link to result depends on the points  */}
            {
                currentQuestion + 1 >= countOfMaxQuestion 
                ? 
                <LinkToResults 
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    points= {points}
                    countOfMaxQuestion = {countOfMaxQuestion}
                />
                : 
                <ButtonNextQuestion
                    currentQuestion= {currentQuestion}
                    setCurrentQuestion= {setCurrentQuestion}
                    setCanSetPoint= {setCanSetPoint}
                />
            }
        </div>
    )
}


export default Questions;