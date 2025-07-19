import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = [
    ["good", good],
    ["neutral", neutral],
    ["bad", bad],
  ];

  return (
    <>
      <h1>give feeback</h1>
      <Button title="good" onClick={() => setGood(good + 1)} />
      <Button title="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button title="bad" onClick={() => setBad(bad + 1)} />
      <Statistics stats={stats} />
    </>
  );
};

const Button = ({ title, onClick }) => (
  <button onClick={onClick}>{title}</button>
);
const Statistics = ({ stats }) => {
  let total_value = 0;
  let count = 0;
  let positive = 0;

  stats.forEach(([key, value]) => {
    count += value;
    switch (key) {
      case "good":
        positive += value;
        total_value += value;
        break;

      case "bad":
        total_value -= value;
        break;
    }
  });

  if (count > 0)
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            {stats.map(([text, value]) => (
              <StatisticLine key={text} text={text} value={value} />
            ))}

            <StatisticLine text="all" value={count} />
            <StatisticLine text="average" value={total_value / count} />
            <StatisticLine text="positive" value={(positive / count) * 100} />
          </tbody>
        </table>
      </>
    );
  else
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

export default App;
