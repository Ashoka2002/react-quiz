import { useQuiz } from "../QuizContext";

function Question() {
  const { questions, index, dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered &&
              (index === question.correctOption ? "correct" : "wrong")
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
