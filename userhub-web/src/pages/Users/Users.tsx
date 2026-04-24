import { Plus, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/Users";

import styles from "../../assets/styles/Users.module.css";
import { Button, ButtonPrefix } from "../../components/Button";
import { CreateUser } from "../../components/CreateUser";

export function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Users</h1>

        <Button variantType="submit" variantStyle="primary" label="Create User">
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
            {isLoading ? (
              <tr>
                <td colSpan={5}>Loading users...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={5}>Error loading users</td>
              </tr>
            ) : data?.length === 0 ? (
              <tr>
                <td colSpan={5}>No users found</td>
              </tr>
            ) : (
              data?.map((user) => (
                <tr key={user.id}>
                  <td>{user.avatar || "-"}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company}</td>
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
              ))
            )}
          </tbody>
        </table>
      </section>

      <CreateUser />
    </section>
  );
}
