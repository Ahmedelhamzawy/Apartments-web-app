import { NextFunction, Request, Response } from "express";
import * as apartmentService from "./apartmentService";

//controller to handle apartment related requests

//get all apartments with optional filters if exist
export const getAllApartments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { search, city, minPrice, maxPrice } = req.query;

    const filters: any = {};
    if (city) {
      filters.city = { contains: String(city), mode: "insensitive" };
    }

    if (search) {
      filters.OR = [
        { unit_name: { contains: String(search), mode: "insensitive" } },
        { unit_number: { contains: String(search), mode: "insensitive" } },
        { project: { contains: String(search), mode: "insensitive" } },
      ];
    }

    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.gte = Number(minPrice);
      if (maxPrice) filters.price.lte = Number(maxPrice);
    }

    const apartments = await apartmentService.getAll(filters);
    res.json(apartments);
  } catch (err) {
    next(err);
  }
};

export const getApartmentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const apartment = await apartmentService.getById(Number(req.params.id));
    if (!apartment)
      return res.status(404).json({ message: "Apartment not found" });
    res.json(apartment);
  } catch (err) {
    next(err);
  }
};

export const addApartment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newApartment = await apartmentService.create(req.body);
    res.status(201).json(newApartment);
  } catch (err) {
    next(err);
  }
};
