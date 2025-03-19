-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "engineVolume" DOUBLE PRECISION NOT NULL,
    "fuelType" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "transmission" TEXT NOT NULL,
    "interior" TEXT NOT NULL,
    "pricePerDay" DOUBLE PRECISION NOT NULL,
    "priceFor5Days" DOUBLE PRECISION NOT NULL,
    "priceFor10Days" DOUBLE PRECISION NOT NULL,
    "driverSurcharge" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
