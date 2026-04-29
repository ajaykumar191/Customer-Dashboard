import React, { useState } from "react";

function CustomerForm({ onCustomerAdded }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("All fields are required");
      return;
    }
    const API = process.env.REACT_APP_API_URL;  
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setForm({ name: "", email: "", phone: "" });

    onCustomerAdded();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <button type="submit">Add Customer</button>
    </form>
  );
}

export default CustomerForm;