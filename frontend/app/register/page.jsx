"use client";

import { useState } from "react";
import API from "../../services/api";
import Navbar from "../../components/Navbar";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    role: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("email", form.email);
    data.append("age", form.age);
    data.append("gender", form.gender);
    data.append("role", form.role);
    data.append("image", form.image);

    try {
      const res = await API.post(
        "/users/register",
        data
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-10 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-[500px] bg-white shadow-lg p-6 rounded-lg"
        >
          <h2 className="text-2xl mb-5 font-bold">
            Register User
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full border p-3 mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 mb-4"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            className="w-full border p-3 mb-4"
          />

          <select
            name="gender"
            onChange={handleChange}
            className="w-full border p-3 mb-4"
          >
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="text"
            name="role"
            placeholder="Role"
            onChange={handleChange}
            className="w-full border p-3 mb-4"
          />

          <input
            type="file"
            onChange={handleImage}
            className="mb-4"
          />

          <button className="bg-black text-white px-6 py-2 rounded">
            Register
          </button>
        </form>
      </div>
    </>
  );
}