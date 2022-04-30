import { useState } from "react";
import Hamburger from "@components/Icons/Hamburger";
import Logo from "@components/Icons/Logo";
import Sun from "@components/Icons/Sun";
import classes from "./header.module.scss";
import Moon from "@components/Icons/Moon";
import Close from "@components/Icons/Close";
import NavLink from "@components/NavLink";

const navLinks = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "blog",
    href: "/blog",
  },
  {
    title: "projects",
    href: "/projects",
  },
  {
    title: "snipeets",
    href: "/snippets",
  },
  {
    title: "about",
    href: "/about",
  },
];

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNav = () => setIsOpen((val) => !val);
  const toggleTheme = () => setTheme((val) => (val == "light" ? "dark" : "light"));
  return (
    <header className={classes.header}>
      <Logo className={classes["header__logo"]} />
      <div className={classes["header__controls"]}>
        <button
          type="button"
          aria-label="toggle theme"
          onClick={toggleTheme}
          className={classes["header__control"]}
        >
          {theme === "dark" && <Sun className={classes["header__icon"]} />}
          {theme === "light" && <Moon className={classes["header__icon"]} />}
        </button>
        <button
          className={classes["header__control"]}
          type="button"
          aria-label={`${isOpen ? "close" : "open"} primary navigation`}
          onClick={toggleNav}
        >
          {!isOpen && <Hamburger className={classes["header__hamburger"]} />}
          {isOpen && <Close className={classes["header__hamburger"]} />}
        </button>
      </div>
      <nav
        className={`${classes["header__nav"]} ${isOpen ? classes["header__nav--open"] : ""}`}
        aria-label="primary-navigation"
      >
        <ul className={classes["header__primary-nav"]}>
          {navLinks.map(({ title, href }) => (
            <li className={classes["header__nav-item"]} key={title} onClick={toggleNav}>
              <NavLink
                href={href}
                className={`${classes["header__nav-link"]} `}
                active={classes["header__nav-link--active"]}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
