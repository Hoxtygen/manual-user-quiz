import React, { useState } from "react";
import Hero from "./Hero";
import Offers from "./Offers";
import { Quiz } from "../quiz";
import { QuizQuestion } from "src/typeDef";
import { Footer } from "src/components/footer";

type HomePageProps = {
  quizQuestions: QuizQuestion[];
};

export default function HomePage({ quizQuestions }: HomePageProps) {
  const [showModal, setModal] = useState(false);
  const handleShowModal = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <Hero handleShowModal={handleShowModal} />
      <Offers />
      <Footer />
      <Quiz
        setModal={setModal}
        showModal={showModal}
        quizQuestions={quizQuestions}
      />
    </>
  );
}
