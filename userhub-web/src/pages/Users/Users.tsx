import { Plus, Search } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { deleteUser, getUsers, type User } from "../../services/Users";

import styles from "../../assets/styles/Users.module.css";
import { Button, ButtonPrefix } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { UserForm } from "../../components/UserForm";

export function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const queryClient = useQueryClient();

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  function handleDelete(user: User) {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.email}?`,
    );

    if (!confirmDelete) return;

    deleteUserMutation.mutate(user.id);
  }

  function openCreateModal() {
    setModalMode("create");
    setSelectedUser(null);
    setIsModalOpen(true);
  }

  function openEditModal(user: User) {
    setModalMode("edit");
    setSelectedUser(user);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedUser(null);
  }

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Users</h1>

        <Button
          variantType="submit"
          variantStyle="primary"
          label="Create User"
          onClick={openCreateModal}
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
                      onClick={() => openEditModal(user)}
                    ></Button>

                    <Button
                      variantType="button"
                      variantStyle="delete"
                      label={
                        deleteUserMutation.isPending ? "Deleting..." : "Delete"
                      }
                      form="settings-form"
                      onClick={() => handleDelete(user)}
                    ></Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <UserForm
          onClose={closeModal}
          mode={modalMode}
          selectedUser={selectedUser}
        />
      </Modal>
    </section>
  );
}
