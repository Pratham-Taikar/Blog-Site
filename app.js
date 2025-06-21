import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static('public'));

// EJS View Engine
app.set('view engine', 'ejs');

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Error ❌", err));

// Routes
app.use(authRoutes);
app.use(blogRoutes);

// Server Listening
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
