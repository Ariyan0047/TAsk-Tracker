import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  const btnClassDanger = "btn btn-outline-danger btn-lg text-uppercase w-100";
  const btnClassWarning = "btn btn-outline-warning btn-lg text-uppercase w-100";
  const btnClassInfo = "btn btn-outline-info btn-lg text-uppercase w-100";

  // HEADER BUTTON CLICK FUNCTION
  const btnClick = () => {
    alert("BUTTON IS CLICKED !!!!!");
  };

  return (
    <header className="header container-fluid bg-dark text-light d-flex justify-content-between align-items-center p-2">
      <h1 className="text-uppercase">{title}</h1>
      <div className="w-25">
        <Button className={btnClassDanger} text="close" btnClick={btnClick} />
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "user tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
