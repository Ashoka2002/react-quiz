import { useEffect } from "react";
import { useQuiz } from "../QuizContext";

function Timer() {
  const { secondRemaining, dispatch } = useQuiz();
  const minute = Math.floor(secondRemaining / 60);
  const second = secondRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {minute < 10 && "0"}
      {minute}:{second < 10 && "0"}
      {second}
    </div>
  );
}

export default Timer;
