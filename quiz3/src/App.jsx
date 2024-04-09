import React, { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Quiz from './Components/Quiz'
import Result from './Components/Result'

const App = () => {
  const [qno, setQno] = useState(0);
  const [result, setResult] = useState({ correctno: 0, wrongno: 0 });

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home setQno={setQno} />} />
        <Route path='/quiz' element={<Quiz qno={qno} setQno={setQno} result={result} setResult={setResult} />} />
        <Route path='/result' element={<Result qno={qno} setQno={setQno} result={result} setResult={setResult} />}/>
      </Routes>
    </div>
  )
}

export default App