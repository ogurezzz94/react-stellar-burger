import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Header.module.css";
import NavButton from "../NavButton/NavButton";

export default function Header() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={`${styles.nav}`}>
        <a href="blank" className={`${styles.logo}`}>
          <Logo className={`mb-10`} />
        </a>
        <ul className={`${styles.list}`}>
          <li>
            <NavButton text="Конструктор">
              <BurgerIcon type="primary" />
            </NavButton>
          </li>
          <li className={`${styles.space_item}`}>
            <NavButton text="Лента заказов">
              <ListIcon type="secondary" />
            </NavButton>
          </li>
          <li>
            <NavButton text="Личный кабинет">
              <ProfileIcon type="secondary" />
            </NavButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}

