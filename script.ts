import * as fs from 'fs/promises';
import * as path from 'path';
import { uniqBy } from 'lodash';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function readRecipeJson(): Promise<any> {
    const filePath = path.join(__dirname, 'json_files', 'recipe.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const recipes = JSON.parse(fileContent);
    const recipe =  uniqBy(recipes.flatMap((recipe: any) => {
        return recipe.ingredients.map((ingredient: any) => {
            return {
                where: { name: ingredient.name },
                update: {},
                create: {
                    name: ingredient.name
                }
            }
        })
    }), 'where.name');
    console.log(recipe)
    return recipe;
}

async function readRecipe2() {
    const ingredientNamesAndIds = await prisma.ingredient.findMany({
        select: {
            name: true,
            id: true
        }
    })

    const dessertNamesAndIds = await prisma.dessert.findMany({
        select: {
            name: true,
            id: true
        }
    })

    const filePath = path.join(__dirname, 'json_files', 'recipe.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const recipes = JSON.parse(fileContent);
    const recipe =  recipes.flatMap((recipe: any) => {
        const recipeId = dessertNamesAndIds.find((nameAndId: any) => nameAndId.name === recipe.name)?.id
        return recipe.ingredients.map((ingredient: any) => {
            const ingredientId = ingredientNamesAndIds.find((nameAndId: any) => nameAndId.name === ingredient.name)?.id
            return {
                where: {id: { ingredientId: ingredientId, dessertId: recipeId }},
                update: {},
                create: {
                    amount: ingredient.amount.split(' ')[0],
                    unit: ingredient.amount.split(' ')[1],
                    dessertId: recipeId,
                    ingredientId: ingredientId
                }
            }
        })
    });
    recipe.forEach((recipe: any) => {
        console.log(recipe)
        console.log(',')
    })
}

//readRecipeJson()
readRecipe2()