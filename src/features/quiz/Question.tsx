import parse from "html-react-parser";
import Image from "next/image";

import { ImageGrid } from "src/components/image-grid";
import { choiceOptions } from "src/constants";
import { QuestionProps } from "src/typeDef";
import CheckMark from "../../../public/assets/svgs/correct.svg";
import Wrong from "../../../public/assets/svgs/wrong.svg";
import ControlButton from "src/components/Button/ControlButton";
import clsx from "clsx";

export default function Question({
  handleNextQuestion,
  handlePrevQuestion,
  questionIndex,
  selectedHandler,
  questionObject,
}: QuestionProps) {
  const { question, selectedOptionIndex, isRejection, options } =
    questionObject;
  const showPrevBtn = questionIndex !== 0;
  const isNextBtnDisabled = selectedOptionIndex != undefined && !isRejection;

  return (
    <div className="max-w-[60rem]  mx-auto my-0">
      <header>
        <h4 className="">{question}</h4>
      </header>
      <div className="">
        {isRejection && (
          <section className="text-red-500 text-center p-2 mb-4">
            <h5>
              “Unfortunately, we are unable to prescribe this medication for
              you. This is because finasteride can alter the PSA levels, which
              maybe used to monitor for cancer. You should discuss this further
              with your GP or specialist if you would still like this
              medication.”
            </h5>
          </section>
        )}
        {typeof options[0].value === "boolean" ? (
          <div className="">
            {options.map((item, index) => {
              const isSelected = selectedOptionIndex == index ? true : false;
              return (
                <ControlButton
                  key={"id__" + index}
                  clickHandler={() => selectedHandler(index)}
                  className="py-8 px-16"
                  selected={isSelected}
                >
                  <Image
                    src={item.display == "Yes" ? CheckMark : Wrong}
                    alt={item.display}
                    width={60}
                    height={60}
                  />
                  <p>{parse(item.display)}</p>
                  <span>{choiceOptions[index]}</span>
                </ControlButton>
              );
            })}
          </div>
        ) : (
          <ImageGrid>
            {options.map((item, index) => {
              const isSelected = selectedOptionIndex == index ? true : false;
              return (
                <ControlButton
                  key={"id_" + index}
                  clickHandler={() => selectedHandler(index)}
                  selected={isSelected}
                >
                  {parse(item.display)}
                  <p>{item.value}</p>
                  <span>{choiceOptions[index]}</span>
                </ControlButton>
              );
            })}
          </ImageGrid>
        )}
        <section
          className={clsx(
            "flex items-center",
            !showPrevBtn ? "justify-center" : "justify-between"
          )}
        >
          {showPrevBtn && (
            <ControlButton
              clickHandler={handlePrevQuestion}
              className="bg-red-700 text-white font-semibold py-4 px-8 text-[1.5rem] mt-8 flex items-center cursor-pointer border"
            >
              Previous
            </ControlButton>
          )}
          <ControlButton
            clickHandler={handleNextQuestion}
            disabled={!isNextBtnDisabled}
            className="bg-green-400 text-white font-semibold disabled:bg-slate-500 disabled:cursor-not-allowed py-4 px-8 text-[1.5rem] mt-8 flex items-center cursor-pointer border"
          >
            Next
          </ControlButton>
        </section>
      </div>
    </div>
  );
}
