-- CreateEnum
CREATE TYPE "DurationType" AS ENUM ('DAY', 'WEEK', 'MONTH', 'YEAR');

-- CreateEnum
CREATE TYPE "ExtraIngredient" AS ENUM ('GPS', 'BABY_SEAT', 'WIFI', 'ROOF_BOX');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" SERIAL NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Duration" (
    "id" TEXT NOT NULL,
    "name" "DurationType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Duration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Extra" (
    "id" TEXT NOT NULL,
    "name" "ExtraIngredient" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Extra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Duration" ADD CONSTRAINT "Duration_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
