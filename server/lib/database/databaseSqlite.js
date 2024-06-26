"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    host: 'https://quickgrade-server.onrender.com', // Update this to the URL of your hosted server
    port: 10000, // Update this to the appropriate port if necessary
    logging: false // Optionally, set to false to disable logging SQL queries
});
exports.default = sequelize;
