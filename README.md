# Customer Management Dashboard

## Overview
A simple full-stack app to add, view, and delete customers.

## Tech Stack
- Frontend: React
- Backend: Node.js + Express

## Setup

### Backend
cd backend
npm install
node server.js

### Frontend
cd frontend
npm install
npm start

## API Endpoints

- POST /customers → Add customer
- GET /customers → Get all customers
- DELETE /customers/:id → Delete customer

## Features
- Add customer
- View customer list
- Delete customer

## Assumptions
- Data stored in memory (resets on restart)