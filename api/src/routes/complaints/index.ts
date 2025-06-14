import {Router} from 'express'
import { getComplaints,createComplaints,updateComplaints,getComplaintsById , deleteComplaints} from './complaintsControllers';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send('Complaints API is working!');
});

router.get('/all', getComplaints);
router.get('/:id', getComplaintsById); 
router.post('/', createComplaints);
router.put('/:id', updateComplaints);
router.delete('/:id', deleteComplaints);


export default router;
