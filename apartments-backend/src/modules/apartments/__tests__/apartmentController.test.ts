import { Request, Response, NextFunction } from 'express';
import * as apartmentController from '../apartmentController';
import * as apartmentService from '../apartmentService';
import { it } from 'node:test';
import { it } from 'node:test';
import { afterEach } from 'node:test';
import { beforeEach } from 'node:test';
import { describe } from 'node:test';

// Mock the service layer so we don't hit the real database
jest.mock('../apartmentService');

describe('Apartment Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    // Create fresh mock objects before each test
    mockRequest = { params: {}, query: {} };
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(), // mockReturnThis allows chaining: res.status(404).json(...)
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clean up after each test
  });

  // Test the most important logic: 404 error handling
  it('should return 404 when apartment is not found', async () => {
    mockRequest.params = { id: '999' };
    
    // Mock service to return null (apartment not found)
    (apartmentService.getById as jest.Mock).mockResolvedValue(null);

    await apartmentController.getApartmentById(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    // Verify the controller returns correct 404 response
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Apartment not found' });
  });

  // Test the filter building logic 
  it('should build filters correctly with city and price range', async () => {
    mockRequest.query = {
      city: 'Cairo',
      minPrice: '1000',
      maxPrice: '5000',
    };

    const mockResult = {
      apartments: [],
      pagination: { page: 1, limit: 9, total: 0, totalPages: 0, hasNext: false, hasPrev: false },
    };
    (apartmentService.getAll as jest.Mock).mockResolvedValue(mockResult);

    await apartmentController.getAllApartments(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    // Verify filters are built correctly from query params
    expect(apartmentService.getAll).toHaveBeenCalledWith(
      expect.objectContaining({
        city: { contains: 'Cairo', mode: 'insensitive' },
        price: { gte: 1000, lte: 5000 },
      }),
      1,
      9
    );
  });
});
