import React from 'react';
import { Link } from 'react-router-dom';

const Result = (props) => {
    const { qno, setQno, result, setResult } = props;
    return (
        <div className='mainbox'>
            <h2 className='heading'>Result</h2>
            <div className='result'>
                <div className="header">
                    <h3>You need more practise!</h3>
                    <h2 className='score'>Your score is {(result.correctno / 15).toFixed(2) * 100}%</h2>
                </div>
                <div className='info'>
                    <div className="flex">
                        <h4>Total number of questions</h4>
                        <h3>15</h3>
                    </div>
                    <div className="flex">
                        <h4>Number of attempted questions</h4>
                        <h3>{qno}</h3>
                    </div>
                    <div className="flex">
                        <h4>Number of correct answers</h4>
                        <h3>{result.correctno}</h3>
                    </div>
                    <div className="flex">
                        <h4>Number of wrong answers</h4>
                        <h3>{result.wrongno}</h3>
                    </div>
                </div>
            </div>
            <div className='b-cont'>
                <Link to={"/quiz"}>
                    <button id='playagain' onClick={() => { setQno(0); setResult({ correctno: 0, wrongno: 0 }); }}>Play Again</button>
                </Link>
                <Link to={"/"}>
                    <button id='home'>Back to home</button>
                </Link>
            </div>
        </div>
    );
}

export default Result;