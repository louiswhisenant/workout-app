import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';

import exerciseRoutes from './routes/exerciseRoutes.js';
import exerciseTemplateRoutes from './routes/exerciseTemplateRoutes.js';
import userRoutes from './routes/userRoutes.js';
import workoutRoutes from './routes/workoutRoutes.js';
import microcycleRoutes from './routes/microcycleRoutes.js';
import mesocycleRoutes from './routes/mesocycleRoutes.js';
import macrocycleRoutes from './routes/macrocycleRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.use('/api/exercises', exerciseRoutes);
app.use('/api/exercise-templates', exerciseTemplateRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/microcycles', microcycleRoutes);
app.use('/api/mesocycles', mesocycleRoutes);
app.use('/api/macrocycles', macrocycleRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
