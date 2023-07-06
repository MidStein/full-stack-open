const Button = ({ text, fb, setFb }) => {
  return (
    <button onClick={() => { setFb(fb + 1) }}>{text}</button>
  );
}

export default Button;

