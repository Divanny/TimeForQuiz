import React, { useState } from "react";
import logo from "assets/logo.svg";
import CountDown from "components/CountDown";

const Game = () => {
  // const [difficulty, setDifficulty] = useState("easy");
  // const [category, setCategory] = useState("all");
  const [showCountDown, setShowCountDown] = useState(true);
  const [questionTime] = useState(15);
  const [answers, setAnswers] = useState([{ description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum debitis tempore alias officiis inventore repellendus", correct: false, selected: false, wrongAnswer: false, correctAnswer: false }, { description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum debitis tempore alias officiis inventore repellendus", correct: false, selected: false, wrongAnswer: false, correctAnswer: false }, { description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum debitis tempore alias officiis inventore repellendus", correct: true, selected: false, wrongAnswer: false, correctAnswer: false }, { description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum debitis tempore alias officiis inventore repellendus", correct: false, selected: false, wrongAnswer: false, correctAnswer: false }]);
  const [score, setScore] = useState(0);
  const [timeOver, setTimeOver] = useState(false);

  const showCorrectAnswer = (actualAnswers) => {
    const updatedAnswers = actualAnswers.map((answer) => {
      if (answer.correct) {
        return { ...answer, correctAnswer: true };
      }
      return answer;
    });
    
    setAnswers(updatedAnswers);
  };
  
  const showWrongAnswer = (actualAnswers) => {
    const updatedAnswers = actualAnswers.map((answer) => {
      if (answer.selected) {
        return { ...answer, wrongAnswer: true };
      }
      if (answer.correct) {
        return { ...answer, correctAnswer: true };
      }
      return answer;
    }); 

    setAnswers(updatedAnswers);
  };
  
  const checkAnswer = () => {
    setTimeout(() => {
      setAnswers((prevAnswers) => {
        if (prevAnswers.some((x) => x.selected && x.correct)) {
          setScore(score + 1);
          showCorrectAnswer(prevAnswers);
        }
        else {
          showWrongAnswer(prevAnswers);
        }
        setTimeOver(true);
        return prevAnswers;
      });
    }, questionTime * 1000);
  }

  const handleFinish = () => {
    setShowCountDown(false);
    checkAnswer();    
  };

  const handleSelectAnswer = (index) => {
    if (timeOver) return;
    const updatedAnswers = answers.map((answer, i) => {
      if (i === index) {
        return { ...answer, selected: true };
      } else {
        return { ...answer, selected: false };
      }
    });
    setAnswers(updatedAnswers);
  };

  return (
    <div className="z-1 absolute w-full md:h-screen top-0 left-0 flex items-center justify-center shadow-4xlZ">
      {showCountDown && <CountDown seconds={3} onFinish={handleFinish} />}
      {!showCountDown && (
        <div className="flex-col flex justify-center w-3/4 sm:w-3/4 animate-fade-up">
          <div className="flex-col flex justify-center my-4">
            <img
              src={logo}
              alt="Logo"
              className="h-36 sm:h-48 my-2 select-none"
            />
            <div className="glassmorphism p-4 w-full my-2 drop-shadow-md">
              <h1 className="text-center text-ellipsis text-md sm:text-lg lg:text-xl select-none text-white font-bold mb-4">
                Question 1
              </h1>
              <h1 className="main-title text-center text-ellipsis text-2xl sm:text-3xl lg:text-4xl select-none">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas consequuntur vitae esse architecto et tempore, quidem voluptas natus?
              </h1>
            </div>

            <div className="progress-bar glassmorphism">
              <div className="progress-bar-fill bg-warning"> </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 my-4">
              {answers.map((answer, index) => (
                <div key={index} onClick={() => handleSelectAnswer(index)} className={`question-card p-4 text-center text-white rounded border-[#292f46] justify-center items-center flex select-none ${answer.wrongAnswer ? "question-card-wrong" : ""} ${answer.correctAnswer ? "question-card-correct" : ""} ${answer.selected && !timeOver ? "question-card-selected" : ""}`}><div><b>{String.fromCharCode(97 + index)}.</b> {answer.description}</div></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Game;