import { Plus, Search } from "lucide-react";

import styles from "../../assets/styles/Users.module.css";
import { Button, ButtonPrefix } from "../../components/Button";

export function Users() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Users</h1>

        <Button
          variantType="submit"
          variantStyle="primary"
          label="Create User"
          form="settings-form"
        >
          <ButtonPrefix icon={Plus} />
        </Button>
      </header>

      <div className={styles.search}>
        <Search size={18} />
        <input type="text" placeholder="Search users..." />
      </div>

      <section className={styles.tableContainer}>
        <table className={styles.table}>
          <caption className={styles.visuallyHidden}>List of users</caption>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avatar</td>
              <td>Alice Johnson</td>
              <td>alice@userhub.io</td>
              <td>Acme Inc</td>
              <td className={styles.actions}>
                <Button
                  variantType="button"
                  variantStyle="edit"
                  label="Edit"
                  form="settings-form"
                ></Button>

                <Button
                  variantType="button"
                  variantStyle="delete"
                  label="Delete"
                  form="settings-form"
                ></Button>
              </td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>Brian Lee</td>
              <td>brian@userhub.io</td>
              <td>Nova Labs</td>
              <td className={styles.actions}>
                <Button
                  variantType="button"
                  variantStyle="edit"
                  label="Edit"
                  form="settings-form"
                ></Button>

                <Button
                  variantType="button"
                  variantStyle="delete"
                  label="Delete"
                  form="settings-form"
                ></Button>
              </td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>Carla Gomez</td>
              <td>carla@userhub.io</td>
              <td>Orbit Co</td>
              <td className={styles.actions}>
                <Button
                  variantType="button"
                  variantStyle="edit"
                  label="Edit"
                  form="settings-form"
                ></Button>

                <Button
                  variantType="button"
                  variantStyle="delete"
                  label="Delete"
                  form="settings-form"
                ></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
}
