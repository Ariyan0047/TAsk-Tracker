import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header container-fluid bg-dark text-light d-flex justify-content-between align-items-center p-2">
      <h1 className="text-uppercase">{title}</h1>
      <div className="w-25">
        <Button />
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
