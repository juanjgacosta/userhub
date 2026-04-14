import styles from "../../assets/styles/Dashboard.module.css";

export function Dashboard() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>
          Track growth and account health at a glance.
        </p>
      </header>

      <section className={styles.cards}>
        <article className={styles.card}>
          <span className={styles.cardLabel}>New Signups</span>
          <strong className={styles.cardValue}>+1,284</strong>
        </article>

        <article className={styles.card}>
          <span className={styles.cardLabel}>Churn Rate</span>
          <strong className={styles.cardValue}>2.4%</strong>
        </article>
      </section>

      <section className={styles.cards}>
        <article className={styles.card}>
          <h2 className={styles.sectionTitle}>User Growth</h2>
        </article>

        <article className={styles.card}>
          <h2 className={styles.sectionTitle}>Usage Trend</h2>
          <span className={styles.activityPlaceholder}>Chart placeholder</span>
        </article>
      </section>
    </main>
  );
}
