import './header.scss';

const User = () => {
  return (
    <div className="user">
      <div className="name">Hello, Hassan</div>
      <div className="img">
        <img src="/images/user.jpeg" alt="" />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="brand">
      <img className="schoola-logo" src="/icons/logoText.png" alt="logo" />
    </div>
  );
};
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <User />
      </div>
    </header>
  );
};

export default Header;
