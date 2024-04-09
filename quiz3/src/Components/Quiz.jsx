import React from 'react';
import quizQuestion from '../question.js';
import { Link } from 'react-router-dom';

const Quiz = (props) => {
    const { qno, setQno, result, setResult } = props;
    const { question, optionA, optionB, optionC, optionD, answer } = quizQuestion[qno];

    const updateResult = (isCorrect) => {
        const updatedResult = {
            correctno: isCorrect ? result.correctno + 1 : result.correctno,
            wrongno: isCorrect ? result.wrongno : result.wrongno + 1,
        };
        setResult(prevResult => updatedResult);
        isCorrect ? alert("correct answer") : alert("wrong answer");
        nextQ();
    };

    const prevQ = () => {
        setQno((prevQno) => (prevQno > 0 ? prevQno - 1 : 0));
    };

    const nextQ = () => {
        setQno((prevQno) => (prevQno < 14 ? prevQno + 1 : 14));
    };

    const reset = () => {
        let resp = window.confirm("Are you sure you want to quit?");
        resp ? setQno(0) : '';
    };

    return (
        <div className='main'>
            <h2 className='title'>Question</h2>
            <h5>{qno + 1} of 15</h5>
            <p className='question'>{question}</p>
            <div className='container'>
                <div className='group'>
                    <button className='option' onClick={() => updateResult(optionA === answer)}>
                        {optionA}
                    </button>
                    <button className='option' onClick={() => updateResult(optionB === answer)}>
                        {optionB}
                    </button>
                </div>
                <div className='group'>
                    <button className='option' onClick={() => updateResult(optionC === answer)}>
                        {optionC}
                    </button>
                    <button className='option' onClick={() => updateResult(optionD === answer)}>
                        {optionD}
                    </button>
                </div>
            </div>
            <div className='buttons'>
                <button id='previous' onClick={prevQ}>
                    Previous
                </button>
                <button id='next' onClick={nextQ}>
                    Next
                </button>
                <button id='quit' onClick={reset}>
                    Quit
                </button>
                <Link to={{
                    pathname: '/result',
                    state: { qno: qno, result: result }
                }}>
                    <button id='finish'>Finish</button>
                </Link>
            </div>
        </div>
    );
}

export default Quiz;