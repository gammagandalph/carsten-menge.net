import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navigation.module.css";

export default function Navigation({ children, active, title }) {
  return (
    <div>
      <div className={styles.navigation}>
        <h1 className={styles.siteTitle}>Carsten Menge</h1>
        <Link href="/">
          <a
            className={`${styles.navLink} 
              ${active === "home" ? styles.active : ""}`}
          >
            Home
          </a>
        </Link>
        <Link href="/whoami">
          <a
            className={`${styles.navLink} 
            ${active === "whoami" ? styles.active : ""}`}
          >
            Über mich
          </a>
        </Link>
        <Link href="/cv">
          <a
            className={`${styles.navLink} 
            ${active === "cv" ? styles.active : ""}`}
          >
            Lebenslauf
          </a>
        </Link>
        <Link href="/activities">
          <a
            className={`${styles.navLink} 
            ${active === "activities" ? styles.active : ""}`}
          >
            Was ich so treibe
          </a>
        </Link>
        <Link href="/contact">
          <a
            style={{ float: "right" }}
            className={`${styles.navLink} 
              ${active === "contact" ? styles.active : ""}`}
          >
            Kontakt?
          </a>
        </Link>
      </div>
      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <h3>{title}</h3>
        </div>
        <div className={styles.mainContent}>{children}</div>
        <div className={styles.rightCol}>
          <div>
            <Image
              src="/ich.jpg"
              alt="Ein Bild von mir"
              width={200}
              height={200}
            />
            <div>
              <a
                href="https://gitlab.com/carsten.menge"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/gitlab.png"
                  width={32}
                  height={32}
                  alt="GitLab-Logo"
                />
              </a>{" "}
              <a
                href="https://github.com/gammagandalph"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/github.ico"
                  width={32}
                  height={32}
                  alt="GitHub-Logo"
                />
              </a>{" "}
              <a
                href="https://twitter.com/gamma_gandalph"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/twitter.png"
                  width={32}
                  height={32}
                  alt="Twitter-Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
