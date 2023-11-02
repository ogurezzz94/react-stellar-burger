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
    <nav className={`${styles.header} pt-4 pb-4`}>
      <a href="blank" className={`${styles.logo}`}>
        <Logo className={`mb-10`} />
      </a>
      <ul className={`${styles.list}`}>
        <li>
          <NavButton
            content={<BurgerIcon type="primary" />}
            text="Конструктор"
          />
        </li>
        <li className={`${styles.space_item}`}>
          <NavButton
            content={<ListIcon type="secondary" />}
            text="Лента заказов"
          />
        </li>
        <li>
          <NavButton
            content={<ProfileIcon type="secondary" />}
            text="Личный кабинет"
          />
        </li>
      </ul>
    </nav>
  );
}
