import styles from "./index.module.css";
import Link from "next/link";
import Logo from "./Logo";
import { Countdown } from "./Countdown";

export const Header = () => (
  <div className={styles.header}>
    <div>
      <a href="https://blablaconf.com" role="link" aria-label="blablaconf link">
        <Logo />
      </a>
    </div>

    <div className={styles.links}>
      <Countdown />
      {/* <a
        href="/#about"
        className={styles.link}
        onClick={(e) => isHome && scrollToSection(e, "#about")}
      >
        About
      </a>
      <a
        href="/#speakers"
        className={styles.link}
        onClick={(e) => isHome && scrollToSection(e, "#speakers")}
      >
        Speakers
      </a>
      <a
        href="/#agenda"
        className={styles.link}
        onClick={(e) => isHome && scrollToSection(e, "#agenda")}
      >
        Agenda
      </a> */}
    </div>
  </div>
);
