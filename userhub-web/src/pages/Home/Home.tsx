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
          <span>Total Users</span>
          <span>24,860</span>
        </div>
        <div className={styles.activeUsersContainer}>
          <span>Active Users</span>
          <span>19,420</span>
        </div>
      </div>

      <div className={styles.homeActivity}>
        <div>Recent Activity</div>
        <span>3 users invited in the last hour</span>
        <span>2 profile updates pending approval</span>
      </div>
    </>
  );
}
