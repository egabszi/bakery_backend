/*
  Warnings:

  - The primary key for the `DessertIngredient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `DessertIngredient` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "DessertIngredient_dessertId_ingredientId_key";

-- AlterTable
ALTER TABLE "DessertIngredient" DROP CONSTRAINT "DessertIngredient_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "DessertIngredient_pkey" PRIMARY KEY ("dessertId", "ingredientId");
