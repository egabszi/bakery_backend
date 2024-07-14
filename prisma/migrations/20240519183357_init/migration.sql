-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('GRAMM', 'MILLILITER', 'PIECES');

-- CreateTable
CREATE TABLE "Dessert" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "lactoseFree" BOOLEAN NOT NULL,
    "glutenFree" BOOLEAN NOT NULL,

    CONSTRAINT "Dessert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DessertIngredient" (
    "id" SERIAL NOT NULL,
    "amount" TEXT NOT NULL,
    "unit" "Unit" NOT NULL DEFAULT 'MILLILITER',
    "dessertId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,

    CONSTRAINT "DessertIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DessertIngredient_dessertId_ingredientId_key" ON "DessertIngredient"("dessertId", "ingredientId");

-- AddForeignKey
ALTER TABLE "DessertIngredient" ADD CONSTRAINT "DessertIngredient_dessertId_fkey" FOREIGN KEY ("dessertId") REFERENCES "Dessert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DessertIngredient" ADD CONSTRAINT "DessertIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

