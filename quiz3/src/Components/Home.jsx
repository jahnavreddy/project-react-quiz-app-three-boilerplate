import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Quiz App</h1>
            <Link to={"/quiz"}>
                <button className="play">Play</button>
            </Link>
        </div>
    );
}

export default Home;