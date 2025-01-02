import { User as FirebaseUser } from 'firebase/auth';
export interface ButtonProps {
  label: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "primary" | "secondary";
  width?: string;
  loading?: boolean;
    color?:string;

}

export interface LinkProps {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  width?: string;
  onclick?: () => void;
}

export interface InputProps {
  label: string;
  type: "text" | "password" | "email";
  id: string;
  placeholder: string;
  onchange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  value?: string;
  passwordVisibility?: boolean;
  setPasswordVisibility?: (value: boolean) => void;
  disabled?: boolean;
}

export interface AuthProps {
  email: string;
  password: string;
  fullname?: string;
}

export interface AuthDBProps {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  experience: string;
  uid: string;
  username: string;
}

export interface AuthState {
  user: FirebaseUser | null;
  setUser: (user: FirebaseUser | null) => void;
  logout: () => void;
}
export interface QuestionsType {
  questionText: string;
  option: string[];
  answer: string;
  explanation: string;
}

export type QodeState = {
  categories: string[];
  quizzes: string[];
  questions: QuestionsType[];
  selectedCategory: string | null;
  selectedQuiz: string | null;
  setCategories: () => void;
  setQuizzes: (categoryId: string) => void;
  setQuestions: (categoryId: string, quizId: string) => void;
};

export type CategoryProps = {
  selectedCategory: string | null;
  isQuizCompleted: boolean;
  categories:number[];
  setQuizzes:(categoryId: string) => void;
 setCategoryName: (categoryName: string) => void;
}



export interface UserAnswer {
  question: string;
  selectedOption: string;
  answer: string;
  explanation: string;
}
export type QuestionsProps = {
 selectedQuiz: string | null;
  shuffledQuestions:QuestionsType[];
  isQuizCompleted:boolean;
  currentQuestionIndex:number;
  timeRemaining:number;
  handleOptionClick:(opt:string)=> void;
}
export type QodeTypeProps = {
  selectedCategory:string | null;
  selectedQuiz: string | null;
  isQuizCompleted: boolean;
  categoryName:string | null;
  quizzes:number[];
   setQuestions: (categoryId: string, quizId: string) => void;
  setQuizId:(quiz: number) => void;
}


export type QuestCompletionProp = {
  isQuizCompleted:boolean;
  score:number;
  shuffledQuestions:QuestionsType[];
  userAnswers:UserAnswer[];
  totalScore:number;
  replayQuiz:()=> void;
  reloadPage:()=> void;
}

export interface QuizStorage {
  uid: string;
  quizzesTaken: string[];
  quizId: string;
  score: number;
}