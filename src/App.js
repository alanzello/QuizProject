import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
function App() {
  const [userName, setUserName] = useState("")
  const [questions , setQuestions] = useState()
  const [score , setScore] = useState(0)
  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
    console.log(data);
  };
  return (
    <BrowserRouter>
    <div className="App" style={{backgroundImage:'url(./ques1.png)'}}>
      <Header/>
      <Routes>
          <Route path="/"  element={<Home userName={userName} setUserName={setUserName}  fetchQuestions={fetchQuestions} />} />
          <Route path="/quiz" element={<Quiz userName={userName} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>}/>
          <Route path="/result" element={<Result score={score} userName={userName}/>} />
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
