-- CreateTable
CREATE TABLE "Apartment" (
    "id" SERIAL NOT NULL,
    "unit_name" VARCHAR(100) NOT NULL,
    "unit_number" VARCHAR(20) NOT NULL,
    "unit_description" TEXT NOT NULL,
    "project" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Apartment_project_unit_number_key" ON "Apartment"("project", "unit_number");
