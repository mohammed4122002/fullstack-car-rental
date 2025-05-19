/*
  Warnings:

  - You are about to drop the column `productId` on the `Duration` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Extra` table. All the data in the column will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Duration" DROP CONSTRAINT "Duration_productId_fkey";

-- DropForeignKey
ALTER TABLE "Extra" DROP CONSTRAINT "Extra_productId_fkey";

-- AlterTable
ALTER TABLE "Duration" DROP COLUMN "productId",
ADD COLUMN     "carId" TEXT;

-- AlterTable
ALTER TABLE "Extra" DROP COLUMN "productId",
ADD COLUMN     "carId" TEXT;

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" SERIAL NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Duration" ADD CONSTRAINT "Duration_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Extra" ADD CONSTRAINT "Extra_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE SET NULL ON UPDATE CASCADE;
