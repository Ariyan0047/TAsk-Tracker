const Button = ({ className, text, btnClick }) => {
  return (
    <div>
      <button className={className} onClick={btnClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
