import styles from "../assets/styles/CreateUser.module.css";
import { Button } from "./Button";

export function CreateUser() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Create / Edit User</h2>
        <p className={styles.subtitle}>
          Manage user profile and access details.
        </p>
      </header>

      <div className={styles.avatar}>
        <img
          src="https://github.com/juanjgacosta.png"
          alt="Avatar's profile picture"
        />
        <div className={styles.avatarInfo}>
          <span className={styles.userAvatar}>Avatar</span>
          <span className={styles.userAvatarInfo}>
            Upload JPG/PNG up to 2MB
          </span>
        </div>
      </div>

      <form className={styles.form} id="user-form">
        <div className={styles.card}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>Name</span>
              <input className={styles.input} type="text" value="Jane Doe" />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input
                className={styles.input}
                type="email"
                value="jane@company.com"
              />
            </label>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>Company</span>
              <input
                className={styles.input}
                type="text"
                value="UserHub Inc."
              />
            </label>

            <label className={styles.field}>
              <span>Password</span>
              <input
                className={styles.input}
                type="password"
                value="••••••••"
              />
            </label>
          </div>
        </div>
        <div className={styles.actions}>
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
        </div>
      </form>
    </section>
  );
}
