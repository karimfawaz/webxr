import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoName}>
        <img className={styles.logo} src="/logo_transparent_no_text.png" />
        <svg className={styles.nameSvg}>
          <text
            className={styles.svgText}
            x="50%"
            y="90%"
            fill=""
            textAnchor="middle"
          >
            THRESH
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Header;
