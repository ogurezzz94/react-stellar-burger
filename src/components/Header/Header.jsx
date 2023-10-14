import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={`${styles.header} pt-4 pb-4`}>
      <Logo className={`mb-10`}></Logo>
    </nav>
  );
}
