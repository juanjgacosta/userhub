import styles from "../assets/styles/CreateUser.module.css";
import { Button } from "./Button";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/Users";

export function CreateUser() {
  const queryClient = useQueryClient();

  const createUseMutation = useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    createUseMutation.mutate(data);
  }

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

      <form className={styles.form} id="user-form" onSubmit={handleSubmit}>
        <section className={styles.formSection}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                defaultValue="Jane Doe"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input
                className={styles.input}
                type="email"
                name="email"
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
                name="company"
                defaultValue="UserHub Inc."
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Password</span>
              <input
                className={styles.input}
                type="password"
                name="password"
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
            label={createUseMutation.isPending ? "Saving..." : "Save User"}
          ></Button>
        </footer>
      </form>
    </article>
  );
}
