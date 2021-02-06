const Button = ({ className, text, btnClick }) => {
  return (
    <div>
      <button className={className} onClick={btnClick} type="submit">
        {text}
      </button>
    </div>
  );
};

export default Button;
