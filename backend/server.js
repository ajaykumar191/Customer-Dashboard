const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
let uuidv4;

(async () => {
    const uuid = await import('uuid');
    uuidv4 = uuid.v4;
})();

let customers = [];


app.post("/customers", (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({
            message: "All fields (name, email, phone) are required"
        });
    }

    const newCustomer = {
        id: uuidv4(),
        name,
        email,
        phone
    };

    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
});


app.get("/customers", (req, res) => {
    return res.json(customers);
});


app.delete("/customers/:id", (req, res) => {
    const { id } = req.params;

    const initialLength = customers.length;

    customers = customers.filter(c => c.id !== id);

    if (customers.length === initialLength) {
        return res.status(404).json({
            message: "Customer not found"
        });
    }

    return res.json({
        message: "Customer deleted successfully"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});