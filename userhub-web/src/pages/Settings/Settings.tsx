import { Save } from "lucide-react";
import styles from "../../assets/styles/Settings.module.css";
import { Button, ButtonPrefix } from "../../components/Button";

export function Settings() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Settings</h1>

        <Button
          variantType="submit"
          variantStyle="primary"
          label="Save Changes"
          form="settings-form"
        >
          <ButtonPrefix icon={Save} />
        </Button>
      </header>

      <form className={styles.form} id="settings-form">
        {/* PROFILE */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Profile settings</h2>
          <p className={styles.sectionSubtitle}>
            Manage your public profile details and contact information.
          </p>

          <div className={styles.card}>
            <div className={styles.grid}>
              <label className={styles.field}>
                <span>Display name</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Jane Admin"
                />
              </label>

              <label className={styles.field}>
                <span>Email</span>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="jane@userhub.io"
                />
              </label>
            </div>
          </div>
        </section>

        {/* ACCOUNT */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Account settings</h2>
          <p className={styles.sectionSubtitle}>
            Update your security and organization preferences.
          </p>

          <div className={styles.card}>
            <div className={styles.grid}>
              <label className={styles.field}>
                <span>Password</span>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="••••••••••••"
                />
              </label>

              <label className={styles.field}>
                <span>Organization</span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="UserHub Inc."
                />
              </label>
            </div>
          </div>
        </section>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <Button
            variantType="button"
            variantStyle="secundary"
            label="Cancel"
          ></Button>

          <Button
            variantType="submit"
            variantStyle="primary"
            label="Save Changes"
          ></Button>
        </div>
      </form>
    </main>
  );
}
