import React from "react";

import './App.css';
import Greeting from './components/Greeting/Greeting';
import NumberQuestions from './components/NumberQuestions/NumberQuestions';
import Questions from './components/Questions/Questions';
import Results from './components/Results/Results';


import{
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

const App = () => (
    <Router>
        <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt='Logo' className='Logo'/>
        <Switch>
            <Route path='/' exact component={Greeting} />
            <Route path='/count_questions' component={NumberQuestions} />
            <Route path='/questions' component={Questions} />
            <Route path='/results' component={Results} />
        </Switch>
    </Router>
)

export default App;