const Button = () => {
  const btnClasses = "btn btn-outline-danger btn-lg text-uppercase w-100";

  // HEADER BUTTON CLICK FUNCTION
  const btnClick = () => {
    alert("BUTTON IS CLICKED !!!!!");
  };

  return (
    <div>
      <button href="#" className={btnClasses} onClick={btnClick}>
        close
      </button>
    </div>
  );
};

export default Button;
