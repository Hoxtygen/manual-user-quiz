import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "src/features/home/HomePage";
import { GetServerSideProps } from "next";
import { QuizQuestion } from "src/typeDef";

export default function Home({ questions }: QuizQuestion) {
  return (
    <main className="">
      <HomePage quizQuestions={questions} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await fetch(
    "https://manual-case-study.herokuapp.com/questionnaires/972423.json"
  );
  const { questions } = await result.json();
  const typedQuestions: QuizQuestion[] = questions;
  return {
    props: { questions: typedQuestions },
  };
};
