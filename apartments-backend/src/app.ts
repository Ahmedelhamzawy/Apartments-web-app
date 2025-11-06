import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import apartmentRoutes from './modules/apartments/apartmentRoutes';
import notFound from './middlewares/notFound';
import errorHandler from './middlewares/errorHandler';

const app = express();

// Swagger setup
const swaggerPath = path.join(process.cwd(), 'swagger.yaml');
const swaggerDocument = YAML.load(swaggerPath);

app.use(cors());
app.use(express.json());

// Swagger docs route (before other routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes
app.use('/api/apartments', apartmentRoutes);

// Error handling (should be last)
app.use(notFound);
app.use(errorHandler);
export default app;
