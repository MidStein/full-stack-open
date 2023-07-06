import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>Statistics</h2>
      {(good === 0 && neutral === 0 && bad === 0) ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good  - bad) / (good + neutral + bad)} />
          <StatisticLine text="postive" value={(good * 100) / (good + neutral + bad)} />
        </>
      )}
    </>
  );
}

export default Statistics;

