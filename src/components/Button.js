const Button = ({ text, clickHandler, buttonClass }) => {
  return (
    <>
      <button className={buttonClass} onClick={clickHandler}>
        {text}
      </button>
    </>
  );
};

export default Button;
