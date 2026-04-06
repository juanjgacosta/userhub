import styles from "../assets/styles/Topbar.module.css";

export function Topbar() {
  return (
    <div className={styles.topbarMain}>
      <aside className={styles.topbarTitle}>User Management</aside>
      <div className={styles.topbarInfo}>
        <img
          src="https://github.com/juanjgacosta.png"
          alt="Gómez's profile picture"
        />
        <span>Juan Gómez Admin</span>
        <button>Logout</button>
      </div>
    </div>
  );
}
