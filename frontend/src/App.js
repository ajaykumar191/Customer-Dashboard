import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";

function App() {
  const [customers, setCustomers] = useState([]);

  const API = "https://customer-dashboard-hsku.onrender.com/customers";

  const fetchCustomers = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Delete customer
  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });

    fetchCustomers();
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <CustomerForm onCustomerAdded={fetchCustomers} />
        </div>

        <div className="card">
          <CustomerTable
            customers={customers}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;