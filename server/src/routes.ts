import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionscontrollers = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionscontrollers.index)
routes.post('/connections', connectionscontrollers.create)
export default routes;