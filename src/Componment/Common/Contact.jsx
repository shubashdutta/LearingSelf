import React, { useState } from "react";
import { useModal } from "../context/SetModal";
import useTitle from "../hook/useTitle";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const Contact = () => {
  const { setModal } = useModal();
  const [id, setID] = useState(2);
  const [form, setForm] = useState({ name: "", email: "" });
  const fetchUsers = async (id) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  };

  const createUser = async (user) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );
    return response.data;
  };

  const tens = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      alert("User created!");
    },
    // onSuccess: (data) => {
    //   console.log("✅ Success:", data);
    //   alert("User created!");
    // },
    // onError: (error) => {
    //   console.error("❌ Error:", error);
    //   alert("Something went wrong.");
    // },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    tens.mutate(form);
  };
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUsers(id),
  });
  console.log("🚀 ~ Contact ~ data:", data);

  useTitle("contect");

  const handleSetModal = () => {
    setModal(
      "Add",
      <div>
        <h1>Hello</h1>
      </div>,
      "lg"
    );
  };

  return (
    <div>
      <button onClick={handleSetModal}>Add News</button>

      <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "0 auto" }}>
        <h3>Create User</h3>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />
        <button type="submit" disabled={tens.isLoading}>
          {tens.isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
