-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "unit_name" TEXT NOT NULL,
    "unit_number" TEXT NOT NULL,
    "unit_description" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);
