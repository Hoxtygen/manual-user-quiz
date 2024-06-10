import React, { useCallback, useEffect, useState } from "react";
import { cloneDeep } from "lodash";

import { QuestionItem, QuizProps, QuizQuestion } from "src/typeDef";
import { Overlay } from "src/components/overlay";
import Question from "./Question";
import ResultPage from "src/components/overlay/ResultPage";

export default function Quiz({
  quizQuestions,
  showModal,
  setModal,
}: QuizProps) {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const arrayCopyHandler = (quizQuestions: QuizQuestion[]) => {
    const questionArrayCopy = quizQuestions.map((quizQuestion) => {
      return {
        ...quizQuestion,
        selectedOptionIndex: undefined,
        isRejection: false,
      };
    });
    setQuestions(questionArrayCopy);
  };

  const quizQuestionsLength = questions?.length;

  const memoizedQuestionCallback = useCallback(() => {
    arrayCopyHandler(quizQuestions);
  }, [quizQuestions]);

  useEffect(() => {
    memoizedQuestionCallback();
    return () => {};
  }, [memoizedQuestionCallback]);

  function handleNextQuestion() {
    if (questionIndex < quizQuestionsLength - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  }

  function handlePrevQuestion() {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
    }
  }

  function selectedHandler(optionIndex: number) {
    const questionsCloneState = cloneDeep(questions);
    const isRejection =
      questionsCloneState[questionIndex].options[optionIndex].isRejection;

    questionsCloneState[questionIndex].selectedOptionIndex = optionIndex;
    questionsCloneState[questionIndex].isRejection = isRejection;

    setQuestions(questionsCloneState);

    if (!isRejection) {
      handleNextQuestion();
    }
  }

  function handleEndQuiz() {
    setModal(false);
    setQuestionIndex(0);
    setShowResult(false);
    arrayCopyHandler(quizQuestions);
    document.body.style.overflow = "unset";
    window.open("https://www.manual.co", "_blank");
  }

  return (
    <Overlay showModal={showModal}>
      {showResult ? (
        <ResultPage handleEndQuiz={handleEndQuiz} />
      ) : (
        <Question
          questionIndex={questionIndex}
          handleNextQuestion={handleNextQuestion}
          handlePrevQuestion={handlePrevQuestion}
          questionObject={questions[questionIndex]}
          selectedHandler={selectedHandler}
        />
      )}
    </Overlay>
  );
}
