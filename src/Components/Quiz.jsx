import { useState } from "react";
import questions from "./question"


function Quiz() {

    const [currentQues, setCurrentQues] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);



    const quizQuestion = questions[currentQues];

    const handleAnswer = (option) => {
        if(option === quizQuestion.answer){
            setScore(score + 1);
        }
    }

    const handleNext = () => {
        const nextQues = currentQues + 1;
        if(nextQues < questions.length){
            setCurrentQues(nextQues);
        }
        else {
            setShowScore(true);
        }
    }

  return (
    <div>
        <div className="part-1">
            <h1>Quiz App</h1>
            <div>
                <div>
                    <h3>Question: {currentQues + 1}/{questions.length} </h3>
                </div>
                <div>
                    <h3>Score: {score} </h3>
                </div>
            </div>
        </div>

        <div className="part-2">
            {
                showScore ? (
                    <div className="score-section">
                        You scored {score} out of {questions.length}
                    </div>
                ) 
                : 
                (
                    <div className="question-section">
                        <div key={quizQuestion.id}>
                            <h2>{quizQuestion.id}</h2>
                            <h2>{quizQuestion.question}</h2>
                            <div>
                                {
                                    quizQuestion.options.map((option, index) => (
                                        <button onClick={() => handleAnswer(option)} 
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