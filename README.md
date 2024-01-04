# employee-management-api

## Overview
An Employee Management System developed using Node.js, Express.js, and Sequelize. It manages employee and leave data efficiently.

## Installation
1. Clone the repository:
git clone [repository-url]
cd employee-management-api

2. Install dependencies:
npm install

## Database Setup
To set up the database and populate it with initial data:

1. Run migrations to create the database schema:
npx sequelize-cli db:migrate

2. Seed the database with initial data:
npx sequelize-cli db:seed:all

Ensure you have the correct database configurations in `config/config.json` before running migrations and seeders.

## Running the Application
1. Start the server:
npm run dev

2. Access at `http://localhost:3000`

## Swagger Documentation
View the interactive API documentation at `http://localhost:3000/api-docs`
