import { Router } from 'express';
import { getAllApartments, getApartmentById, addApartment } from './apartmentController';
import { createApartmentValidation } from './apartmentValidation';
import { validateRequest } from '../../middlewares/validateRequest';

const router = Router();

router.get('/', getAllApartments);
router.get('/:id', getApartmentById);

// Route to add a new apartment with simple validation middleware
router.post('/', createApartmentValidation, validateRequest, addApartment);

export default router;
