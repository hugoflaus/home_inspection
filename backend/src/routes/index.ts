import { Router } from 'express';
import appointmentRouter from './appointments.routes';

const routes = Router();

// Separando as rotas;
routes.use('/appointments', appointmentRouter);

export default routes;
