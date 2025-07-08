import { Router } from 'express';
import { updateDriverLocation , getDrivers} from './driversControllers';

const router = Router();

router.get('/',getDrivers);

router.post('/updatelocation', updateDriverLocation);

export default router;
 