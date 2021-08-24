import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import AppError from './shared/errors/AppError';
import './shared/database';
import './shared/container';
import swaggerDocs from './swagger.json';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});
app.listen(3333, () => {
  console.log('Server started!')
});