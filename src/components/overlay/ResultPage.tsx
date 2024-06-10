import React from "react";
import ControlButton from "../Button/ControlButton";
import { Button } from "../Button/Button";

type ResultPageProps = {
  handleEndQuiz: () => void;
};
export default function ResultPage({ handleEndQuiz }: ResultPageProps) {
  return (
    <section className="max-w-[60rem] my-0 mx-auto p-[10%]">
      <h4>
        “Great news! We have the perfect treatment for your hair loss. Proceed
        to <span onClick={handleEndQuiz}>
          <Button  className="dark:hover:bg-transparent text-[28px] p-0" variant= "link" href="www.manual.co">www.manual.co</Button>
          </span>, and prepare to
        say hello to your new hair!”
      </h4>
      <div className="">
        <ControlButton
          className="bg-green-400 text-white font-semibold py-4 px-8 text-[1.5rem] mt-8 flex items-center cursor-pointer border"
          clickHandler={handleEndQuiz}
        >
          Proceed
        </ControlButton>
      </div>
    </section>
  );
}
