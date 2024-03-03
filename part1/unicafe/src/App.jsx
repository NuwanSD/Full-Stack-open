import { useState } from "react";

const Statistics = ({ total, good, bad, neutral, average, positive }) => {
  if (!total) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <table cellPadding="5px">
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positive}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <StatisticLine handleClick={handleGood} text="good" />
        <StatisticLine handleClick={handleNeutral} text="neutral" />
        <StatisticLine handleClick={handleBad} text="bad" />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics
          total={total}
          good={good}
          neutral={neutral}
          bad={bad}
          all={total}
          average={average}
          positive={positive}
        />
      </div>
    </div>
  );
};

export default App;
