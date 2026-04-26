import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import styles from "../assets/styles/CreateUser.module.css";
import { Button } from "./Button";
import { createUser, updateUser, type User } from "../services/Users";
import { useRef } from "react";

interface CreateUserProps {
  onClose: () => void;
  mode: "create" | "edit";
  selectedUser: User | null;
}

export function CreateUser({ onClose, mode, selectedUser }: CreateUserProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const queryClient = useQueryClient();

  const [errors, setErrors] = useState<Record<string, string>>({});

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: handleSuccess,
  });

  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: handleSuccess,
  });

  const isPending =
    createUserMutation.isPending || updateUserMutation.isPending;

  const schema = z.object({
    name: z.string().min(3, "Name is required - Min 3 characters"),
    email: z.string().email("Invalid e-mail"),
    company: z.string().optional(),
    password: z.string().min(6, "Min 6 characters"),
    // password:
    //   mode === "create"
    //     ? z.string().min(6, "Min 6 characters")
    //     : z.string().optional(),
  });

  function handleSuccess() {
    queryClient.invalidateQueries({ queryKey: ["users"] });

    formRef.current?.reset();
    setErrors({});
    onClose();
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data = {
      name: (formData.get("name") as string) || "",
      email: (formData.get("email") as string) || "",
      company: (formData.get("company") as string) || "",
      password: (formData.get("password") as string) || "",
    };

    const result = schema.safeParse(data);

    if (!result.success) {
      const formattedErrors = result.error.flatten().fieldErrors;

      setErrors({
        name: formattedErrors.name?.[0] ?? "",
        email: formattedErrors.email?.[0] ?? "",
        company: formattedErrors.company?.[0] ?? "",
        password: formattedErrors.password?.[0] ?? "",
      });
      // Print errors on browser console.
      // console.log(result.error.format());
      return;
    }

    // Clear errors on successful validation
    setErrors({});

    // Proceed with mutation
    if (mode === "create") {
      createUserMutation.mutate(result.data);
    } else if (selectedUser) {
      updateUserMutation.mutate({
        id: selectedUser.id,
        name: result.data.name,
        email: result.data.email,
        company: result.data.company,
      });
    }
  }

  function handleCancel() {
    formRef.current?.reset();
    setErrors({});
    createUserMutation.reset();
    onClose();
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {mode === "create" ? "Create User" : "Edit User"}
        </h2>
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

      <form
        className={styles.form}
        ref={formRef}
        id="user-form"
        onSubmit={handleSubmit}
      >
        <section className={styles.formSection}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Enter name"
                defaultValue={selectedUser?.name ?? ""}
              />
              {errors.name && (
                <span className={styles.inputError}>{errors.name}</span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.label}>E-mail</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Enter E-mail"
                defaultValue={selectedUser?.email ?? ""}
              />
              {errors.email && (
                <span className={styles.inputError}>{errors.email}</span>
              )}
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
                placeholder="Enter Company"
                defaultValue={selectedUser?.company ?? ""}
              />
              {errors.company && (
                <span className={styles.inputError}>{errors.company}</span>
              )}
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Password</span>
              <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="••••••••"
              />
              {errors.password && (
                <span className={styles.inputError}>{errors.password}</span>
              )}
            </label>
          </div>
        </section>

        <footer className={styles.actions}>
          <Button
            variantType="button"
            variantStyle="secondary"
            label="Cancel"
            onClick={handleCancel}
          ></Button>

          <Button
            variantType="submit"
            variantStyle="primary"
            label={
              isPending
                ? "Saving..."
                : mode === "create"
                  ? "Create User"
                  : "Update User"
            }
          ></Button>
        </footer>
      </form>
    </article>
  );
}
