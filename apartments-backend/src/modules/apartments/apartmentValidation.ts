import { body } from 'express-validator';

//simple validation not so much restrictive (not focusing on form validation now)
export const createApartmentValidation = [
  body('unit_name').notEmpty().withMessage('Unit name is required'),
  body('unit_number').notEmpty().withMessage('Unit number is required'),
  body('unit_description').notEmpty().withMessage('Unit description is required'),
  body('project').notEmpty().withMessage('Project is required'),
  body('price').isInt({ gt: 0 }).withMessage('Price must be a number greater than 0'),
  body('city').notEmpty().withMessage('City is required'),
];
