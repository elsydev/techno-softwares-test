import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import { createPool } from "mysql2";

dotenv.config();

const conectarDB = async () => {
  // console.log(process.env.MONGO_URI);
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(colors.magenta.bold(`MongoDB Conectado en: ${url}`));
  } catch (error) {
    // console.log(error.message)
    console.log(colors.red.bold("Error al conectar a MongoDB"));
    process.exit(1);
  }
};

export default conectarDB;
/* const mysql = require('mysql2');
const mongoose = require('mongoose');
require('dotenv').config();

// MySQL connection
const mysqlConnection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

// MongoDB connection
 mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
 

// Export MySQL connection
module.exports = { mysqlConnection }; */
