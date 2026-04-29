import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import CustomerForm from "./components/CustomerForm";
import CustomerTable from "./components/CustomerTable";

function App() {
  const [customers, setCustomers] = useState([]);

  const API = process.env.REACT_APP_API_URL;

  const fetchCustomers = useCallback(async () => {
    const res = await fetch(API);
    const data = await res.json();
    setCustomers(data);
  }, [API]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

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