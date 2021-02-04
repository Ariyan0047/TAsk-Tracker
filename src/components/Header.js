import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header container-fluid bg-dark text-light d-flex justify-content-between align-items-center p-2">
      <h1 className="text-uppercase">task tracker</h1>
      <div className="w-25">
        <Button />
      </div>
    </header>
  );
};

export default Header;
