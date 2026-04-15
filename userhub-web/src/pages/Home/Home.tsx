import styles from "../../assets/styles/Home.module.css";

export function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.subtitle}>
          Welcome back, Jane. Here is your quick overview.
        </p>
      </header>

      <section className={styles.cards}>
        <article className={styles.card}>
          <span className={styles.cardLabel}>Total Users</span>
          <strong className={styles.cardValue}>24,860</strong>
        </article>

        <article className={styles.card}>
          <span className={styles.cardLabel}>Active Users</span>
          <strong className={styles.cardValue}>19,420</strong>
        </article>
      </section>

      <section className={styles.activity}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>

        <article className={styles.activityInfo}>
          <span>3 users invited in the last hour</span>
          <span>2 profile updates pending approval</span>
        </article>
      </section>
    </main>
  );
}
