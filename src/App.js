import React from "react";
import './App.css';
import { Suspense, lazy } from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

const Greeting = lazy(() => import('./components/Greeting/Greeting'));
const NumberQuestions = lazy(() => import('./components/NumberQuestions/NumberQuestions'));
const Questions = lazy(() => import('./components/Questions/Questions'));
const Results = lazy(() => import('./components/Results/Results'));

const App = () => (
    <Router>
        <img src={process.env.PUBLIC_URL + '/images/Logo.png'} alt='Logo' className='Logo'/>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path='/' exact component={Greeting} />
                <Route path='/count_questions' component={NumberQuestions} />
                <Route path='/questions' component={Questions} />
                <Route path='/results' component={Results} />
            </Switch>
        </Suspense>
    </Router>
)

export default App;