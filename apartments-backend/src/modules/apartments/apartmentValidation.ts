import { body } from 'express-validator';

//simple validation with type checking
export const createApartmentValidation = [
  body('unit_name')
    .notEmpty().withMessage('Unit name is required')
    .isString().withMessage('Unit name must be a string'),
    
  body('unit_number')
    .notEmpty().withMessage('Unit number is required')
    .isString().withMessage('Unit number must be a string'),
    
  body('unit_description')
    .notEmpty().withMessage('Unit description is required')
    .isString().withMessage('Unit description must be a string'),
    
  body('project')
    .notEmpty().withMessage('Project is required')
    .isString().withMessage('Project must be a string'),
    
  body('price')
    .isInt({ gt: 0 }).withMessage('Price must be a number greater than 0'),
    
  body('city')
    .notEmpty().withMessage('City is required')
    .isString().withMessage('City must be a string'),
];