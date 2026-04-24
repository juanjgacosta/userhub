import styles from "../assets/styles/CreateUser.module.css";
import { Button } from "./Button";

export function CreateUser() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Create / Edit User</h2>
        <p className={styles.subtitle}>
          Manage user profile and access details.
        </p>
      </header>

      <section className={styles.avatarSection}>
        <img
          className={styles.avatarImage}
          src="https://github.com/juanjgacosta.png"
          alt="Avatar's profile picture"
        />
        <div className={styles.avatarInfo}>
          <span className={styles.label}>Avatar</span>
          <span className={styles.helperText}>Upload JPG/PNG up to 2MB</span>
        </div>
      </section>

      <form className={styles.form} id="user-form">
        <section className={styles.formSection}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                type="text"
                defaultValue="Jane Doe"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input
                className={styles.input}
                type="email"
                defaultValue="jane@company.com"
              />
            </label>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.label}>Company</span>
              <input
                className={styles.input}
                type="text"
                defaultValue="UserHub Inc."
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Password</span>
              <input
                className={styles.input}
                type="password"
                defaultValue="••••••••"
              />
            </label>
          </div>
        </section>

        <footer className={styles.actions}>
          <Button
            variantType="button"
            variantStyle="secondary"
            label="Cancel"
          ></Button>

          <Button
            variantType="submit"
            variantStyle="primary"
            label="Save User"
          ></Button>
        </footer>
      </form>
    </article>
  );
}
