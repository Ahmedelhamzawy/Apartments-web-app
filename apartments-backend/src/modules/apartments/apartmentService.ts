import prisma from '../../config/db';

export const getAll = async (filters: any = {}, page: number = 1, limit: number = 9) => {
  const skip = (page - 1) * limit;
  
  const [apartments, total] = await Promise.all([
    prisma.apartment.findMany({
      where: filters,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.apartment.count({ where: filters })
  ]);

  return {
    apartments,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrev: page > 1
    }
  };
};

export const getById = async (id: number) => {
  return prisma.apartment.findUnique({ where: { id } });
};

export const create = async (data: any) => {
  return prisma.apartment.create({ data });
};
