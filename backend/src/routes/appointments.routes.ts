import Router from 'express';

const appointmentRouter = Router();

const appointments = [];

appointmentRouter.post('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

export default appointmentRouter;
