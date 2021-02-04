import React from "react";

const Button = () => {
  const btnClasses = "btn btn-outline-danger btn-lg text-uppercase w-100";

  // HEADER BUTTON CLICK FUNCTION
  const btnClick = () => {
    alert("BUTTON IS CLICKED !!!!!");
  };

  return (
    <div>
      <a href="#" className={btnClasses} onClick={btnClick}>
        close
      </a>
    </div>
  );
};

export default Button;
