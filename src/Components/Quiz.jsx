import questions from "./question"


function Quiz() {
    const quizQuestion = questions[0];

  return (
    <div>
        <div className="part-1">
            <h1>Quiz App</h1>
            <div>
                <div>
                    <h3>Question: 1/10</h3>
                </div>
                <div>
                    <h3>Score: 0 </h3>
                </div>
            </div>
        </div>

        <div className="part-2">
            {
                quizQuestion && quizQuestion.question.map((ques) => {
                    <div key={ques.id}>
                        <h2>{ques.questionText}</h2>
                        <div>
                            {
                                ques.answerOptions.map((ans) => (
                                    <button key={ans.id}>{ans.answerText}</button>
                                ))
                            }
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Quiz