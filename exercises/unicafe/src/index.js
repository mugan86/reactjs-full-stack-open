import React, { useState } from "react";
import ReactDOM from "react-dom";
const Title = ({text}) => <h2>{text}</h2>
const Button = ({ onClick, text }) => (
  <span>
    <button onClick={onClick}>{text}</button>&nbsp;
  </span>
);

const History = ({ label, count }) => (
  <p>
    {label}: {count}
  </p>
);

const ResumeItem = ({ text, result, percent }) => (
  <p>
    {text}: {result} {percent ? "%" : ""}
  </p>
);

const Resume = ({ values }) => {
  const { good, neutral, bad } = values;
  const allReviews = good + neutral + bad;
  const averagePoints = (good * 1 + bad * -1) / allReviews;
  // good ----- allReviews
  //  x ------- 100%
  // (good * 100) / allReviews
  const positiveCommentsPercent = (good * 100) / allReviews;
  if (isNaN(positiveCommentsPercent) || isNaN(averagePoints)) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <ResumeItem text={"All"} result={allReviews} />
      <ResumeItem text={"Average Points"} result={averagePoints} />
      <ResumeItem
        text={"Positive"}
        result={positiveCommentsPercent}
        percent={true}
      />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const texts = {
    good: "Good",
    neutral: "Neutral",
    bad: "Bad",
  };
  const values = {
    good,
    neutral,
    bad,
  };
  return (
    <div>
      <Title text={'Give Feedback'} />
      <Button onClick={() => setGood(good + 1)} text={texts.good} />
      <Button onClick={() => setNeutral(neutral + 1)} text={texts.neutral} />
      <Button onClick={() => setBad(bad + 1)} text={texts.bad} />
      <Title text={'Stats'} />
      <History label={texts.good} count={good} />
      <History label={texts.neutral} count={neutral} />
      <History label={texts.bad} count={bad} />
      <Title text={'Resume'} />
      <Resume values={values} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
