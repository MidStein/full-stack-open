import Button from "./Button";

const GiveFeedback = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  return (
    <>
      <h2>give feedback</h2>
      <Button text="good" fb={good} setFb={setGood} />
      <Button text="neutral" fb={neutral} setFb={setNeutral} />
      <Button text="bad" fb={bad} setFb={setBad} />
    </>
  );
}

export default GiveFeedback;

