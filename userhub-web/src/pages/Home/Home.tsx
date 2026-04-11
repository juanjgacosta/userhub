import styles from "../../assets/styles/Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.homeTitle}>
        <strong>Home</strong>
        <p>Welcome back, Jane. Here is your quick overview.</p>
      </div>

      <div className={styles.userInfoContainer}>
        <div className={styles.totalUsersContainer}>
          <span className={styles.totalUsersLabel}>Total Users</span>
          <span className={styles.totalUsersValue}>24,860</span>
        </div>
        <div className={styles.activeUsersContainer}>
          <span className={styles.activeUsersLabel}>Active Users</span>
          <span className={styles.activeUsersValue}>19,420</span>
        </div>
      </div>

      <div className={styles.homeActivity}>
        <div className={styles.homeActivityTitle}>Recent Activity</div>
        <div className={styles.homeActivityInfo}>
          <span>3 users invited in the last hour</span>
          <span>2 profile updates pending approval</span>
        </div>
      </div>
    </>
  );
}
