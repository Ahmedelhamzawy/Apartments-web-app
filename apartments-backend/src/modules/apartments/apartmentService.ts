import prisma from '../../config/db';

export const getAll = async (filters: any = {}) => {
  return prisma.apartment.findMany({
    where: filters,
    orderBy: { createdAt: 'desc' },
  });
};

export const getById = async (id: number) => {
  return prisma.apartment.findUnique({ where: { id } });
};

export const create = async (data: any) => {
  return prisma.apartment.create({ data });
};
