import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container`}>
        <div className={classes.header__inner}>
          <a href="#" className={classes.logo}>
            <img
              src="./assets/img/logo/logo.svg"
              alt="logo"
              className={classes.header__logo}
            />
          </a>
          <ul className={classes.userActions}>
            <li className={classes.userActions__item}>
              <button className={`${classes.userActions__link} button`}>
                Users
              </button>
            </li>
            <li className={classes.userActions__item}>
              <button className={`${classes.userActions__link} button`}>
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
