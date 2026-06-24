"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await API.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>
      </div>
    </>
  );
}