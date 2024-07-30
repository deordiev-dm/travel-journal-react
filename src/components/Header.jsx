import earthIcon from "../assets/earth-icon.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__icon" src={earthIcon} alt="Icon of Earth" />
        <h1 className="header__title">my travel journal.</h1>
      </div>
    </header>
  );
}

export default Header;
