import { Save } from "lucide-react";
import styles from "../../assets/styles/Settings.module.css";

export function Settings() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <button>
          <Save size={18} />
          <p>Save Changes</p>
        </button>
      </header>

      <section className={styles.activity}>
        <h1 className={styles.activityTitle}>Profile settings</h1>
        <p className={styles.activitySubtitle}>
          Manage your public profile details and contact information.
        </p>

        <section className={styles.card}>
          <section className={styles.cards}>
            <article className={styles.cardInfo}>
              <span>Display name</span>
              <input type="text" placeholder="Jane Admin" />
            </article>

            <article className={styles.cardInfo}>
              <span>Email</span>
              <input type="text" placeholder="jane@userhub.io" />
            </article>
          </section>
        </section>
      </section>

      <section className={styles.activity}>
        <h1 className={styles.activityTitle}>Account settings</h1>
        <p className={styles.activitySubtitle}>
          Update your security and organization preferences.
        </p>

        <section className={styles.card}>
          <section className={styles.cards}>
            <article className={styles.cardInfo}>
              <span>Password</span>
              <input type="password" placeholder="••••••••••••" />
            </article>

            <article className={styles.cardInfo}>
              <span>Organization</span>
              <input type="text" placeholder="UserHub Inc." />
            </article>
          </section>
        </section>
      </section>

      <section className={styles.activityButtons}>
        <button className={styles.buttonCancel}>Cancel</button>
        <button className={styles.buttonSave}>Save Changes</button>
      </section>
    </main>
  );
}
