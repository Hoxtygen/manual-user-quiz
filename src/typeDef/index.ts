export type QuizQuestion = {
	question: string
	type: string
	options: QuizOption[]
}

type QuizOption = {
	display: string
	value: QuizOptionValue
	isRejection: boolean
}

type QuizOptionValue = "Temples" | "Temples & Crown" | "Patchy" | "Moderate" | "Extensive" |  "Complete" | boolean

export type QuizProps = {
  quizQuestions: QuizQuestion[];
  showModal: boolean;
  setModal: (value: boolean) => void;
};

export type QuestionItem = QuizQuestion & {
  selectedOptionIndex: number | undefined;
  isRejection: boolean;
};

export type QuestionProps = {
  handleNextQuestion: () => void;
  handlePrevQuestion: () => void;
  questionIndex: number;
  selectedHandler: (optionIndex: number) => void;
  questionObject: QuestionItem;
};