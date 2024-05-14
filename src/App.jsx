import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/start";
import Timer from "./components/timer";
import Trivia from "./components/trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who does Mihir loves the most?",
      answers: [
        {
          text: "You",
          correct: false,
        },
        {
          text: "You",
          correct: true,
        },
        {
          text: "You",
          correct: false,
        },
        {
          text: "You",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which continent is known as the Land Down Under?",
      answers: [
        {
          text: "Europe",
          correct: false,
        },
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "America",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the largest organ in the human body?",
      answers: [
        {
          text: "Brain",
          correct: false,
        },
        {
          text: "Liver",
          correct: false,
        },
        {
          text: "Skin",
          correct: true,
        },
        {
          text: "Heart",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the currency of Japan?",
      answers: [
        {
          text: "Yen",
          correct: true,
        },
        {
          text: "Won",
          correct: false,
        },
        {
          text: "Ringgit",
          correct: false,
        },
        {
          text: "Baht",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      answers: [
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Dioxide",
          correct: true,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
        {
          text: "Hydrogen",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who is known as the Father of the Indian Constitution?",
      answers: [
        {
          text: "Jawaharlal",
          correct: false,
        },
        {
          text: "Gandhi",
          correct: false,
        },
        {
          text: "Vallabhbhai",
          correct: false,
        },
        {
          text: "Ambedkar",
          correct: true,
        },
      ],
    },
    

  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;