import { useState } from "react";
import questions from "./question"


function Quiz() {

    const [currentQues, setCurrentQues] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const quizQuestion = questions[currentQues];

    const handleAnswer = (option) => {
        if(isAnswered) return; // Prevent multiple answers
        setIsAnswered(true);
        setSelectedAnswer(option);

        if(option === quizQuestion.answer){
            setScore(score + 1);
        }
    }

    const handleNext = () => {
        const nextQues = currentQues + 1;
        if(nextQues < questions.length){
            setCurrentQues(nextQues);
            setIsAnswered(false);
            setSelectedAnswer(null);
        }
        else {
            setShowScore(true);
        }
    }

    const handleStyle = (option) => {
        if(!isAnswered) return {};
        if(option === quizQuestion.answer){
            return {backgroundColor: 'green', color: 'white'};
        }
        else if(option === selectedAnswer){
            if(option !== quizQuestion.answer){
                return {backgroundColor: 'red', color: 'white'};
            }
        }
        return {};
    }

  return (
    <div className="container">
        <div className="part-1">
            <h1>Quiz App</h1>
            <div className="part-1-content">
                <div>
                    <h3>Question: <span>{currentQues + 1} / {questions.length}</span> </h3>
                </div>
                <div>
                    <h3>Score: <span>{score}</span> </h3>
                </div>
            </div>
        </div>

        <div className="part-2">
            {
                showScore ? (
                    <div className="score-section">
                        You scored <span>{score}</span> out of <span>{questions.length}</span>
                    </div>
                ) 
                : 
                (
                    <div className="question-section">
                        <div key={quizQuestion.id}>
                            
                            <p className="question">{quizQuestion.id} . {quizQuestion.question}</p>
                            <div className="options  " >
                                {
                                    quizQuestion.options.map((option, index) => (
                                        <button onClick={() => handleAnswer(option)} 
                                            disabled={isAnswered}
                                            style={handleStyle(option)}
                                            key={index} > 
                                            {option}
                                        </button>
                                    )) 
                                }
                            </div>
                        </div>                     
                    </div>
                )   
            }
        </div>

        <div className="part-3">
            <button onClick={handleNext}>
                Next
            </button>
        </div>
        
    </div>
  )
}

export default Quiz