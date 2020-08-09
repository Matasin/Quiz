import React, { useState } from'react';
import './NumberQuestions.css'

import { Header } from '../../General-Components/Header'
import { InputMaxQuestions } from './Resources/InputMaxQuestions'
import { ButtonsDifficulty } from './Resources/Buttons-Difficulty'
import { LinkToQuestions } from './Resources/LinkToQuestions'



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
            <Header
                Hindex= {'h2'}
                text= {'Before we start, please select number of questions and difficulty you want to answer'}
            />

            <InputMaxQuestions 
                countRef= {countRef}
                setCountOfQuestions= {setCountOfQuestions}
            />

            <ButtonsDifficulty
                setDifficulty= {setDifficulty}
            />

            <LinkToQuestions
                count= {count}
                difficulty= {difficulty}
            />

            <Header
                Hindex= {'h3'}
                text= {'Default "Any" category and 10 questions'}
            />
        </div>
    )
}

export default NumberQuestions;