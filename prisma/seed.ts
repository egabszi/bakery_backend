import { PrismaClient, Unit } from "@prisma/client";

const prisma = new PrismaClient();

async function dessert() {
    [
        {
            where: { name: 'Francia krémes' },
            update: {},
            create: {
                name: 'Francia krémes',
                price: 420,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Gesztenyés krémes' },
            update: {},
            create: {
                name: 'Gesztenyés krémes',
                price: 500,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Csokis krémes' },
            update: {},
            create: {
                name: 'Csokis krémes',
                price: 500,
                lactoseFree: false,
                glutenFree: true
            }
        },
        {
            where: { name: 'Gyümölcsös krémes' },
            update: {},
            create: {
                name: 'Gyümölcsös krémes',
                price: 450,
                lactoseFree: true,
                glutenFree: false
            }
        },
        {
            where: { name: 'Rigó Jancsi' },
            update: {},
            create: {
                name: 'Rigó Jancsi',
                price: 450,
                lactoseFree: true,
                glutenFree: false
            }
        },
        {
            where: { name: 'Tiramisu' },
            update: {},
            create: {
                name: 'Tiramisu',
                price: 600,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Rákóczi túrós' },
            update: {},
            create: {
                name: 'Rákóczi túrós',
                price: 500,
                lactoseFree: true,
                glutenFree: false
            }
        },
        {
            where: { name: 'Isler' },
            update: {},
            create: {
                name: 'Isler',
                price: 500,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Mákos habos' },
            update: {},
            create: {
                name: 'Mákos habos',
                price: 550,
                lactoseFree: true,
                glutenFree: false
            }
        },
        {
            where: { name: 'Képviselőfánk' },
            update: {},
            create: {
                name: 'Képviselőfánk',
                price: 700,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Ekler fánk' },
            update: {},
            create: {
                name: 'Ekler fánk',
                price: 700,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Flódni' },
            update: {},
            create: {
                name: 'Flódni',
                price: 580,
                lactoseFree: true,
                glutenFree: false
            }
        },
        {
            where: { name: 'Zserbó' },
            update: {},
            create: {
                name: 'Zserbó',
                price: 520,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Mézes krémes' },
            update: {},
            create: {
                name: 'Mézes krémes',
                price: 450,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Túrós pite' },
            update: {},
            create: {
                name: 'Túrós pite',
                price: 450,
                lactoseFree: false,
                glutenFree: true
            }
        },
        {
            where: { name: 'Meggyes pite' },
            update: {},
            create: {
                name: 'Meggyes pite',
                price: 450,
                lactoseFree: true,
                glutenFree: true
            }
        },
        {
            where: { name: 'Linzerkarika' },
            update: {},
            create: {
                name: 'Linzerkarika',
                price: 380,
                lactoseFree: true,
                glutenFree: false
            }
        },
        {
            where: { name: 'Kókusz golyó' },
            update: {},
            create: {
                name: 'Kókusz golyó',
                price: 320,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Borzaska' },
            update: {},
            create: {
                name: 'Borzaska',
                price: 350,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Gesztenye szív' },
            update: {},
            create: {
                name: 'Gesztenye szív',
                price: 420,
                lactoseFree: false,
                glutenFree: false
            }
        },
        {
            where: { name: 'Minyon' },
            update: {},
            create: {
                name: 'Minyon',
                price: 450,
                lactoseFree: false,
                glutenFree: false
            }
        }
    ]
        .forEach((async recipe => await prisma.dessert.upsert(recipe)))
};

async function ingredient() {
    [
        { where: { name: 'egg' }, update: {}, create: { name: 'egg' } },
        { where: { name: 'sugar' }, update: {}, create: { name: 'sugar' } },
        { where: { name: 'fruit' }, update: {}, create: { name: 'fruit' } },
        { where: { name: 'milk' }, update: {}, create: { name: 'milk' } },
        { where: { name: 'butter' }, update: {}, create: { name: 'butter' } },
        { where: { name: 'flour' }, update: {}, create: { name: 'flour' } },
        {
            where: { name: 'vanilin sugar' },
            update: {},
            create: { name: 'vanilin sugar' }
        },
        {
            where: { name: 'chocolate' },
            update: {},
            create: { name: 'chocolate' }
        },
        {
            where: { name: 'gluten-free flour' },
            update: {},
            create: { name: 'gluten-free flour' }
        },
        {
            where: { name: 'soy-milk' },
            update: {},
            create: { name: 'soy-milk' }
        }
    ].forEach((async ingredient => await prisma.ingredient.upsert(ingredient)))
}

async function dessertIngredients() {
    [
        {
            where: { id: { ingredientId: 2, dessertId: 1 } },
            update: {},
            create: { amount: '2', unit: Unit.PIECES, dessertId: 1, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 1 } },
            update: {},
            create: { amount: '1000', unit: Unit.GRAMM as Unit, dessertId: 1, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 1 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 1, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 1 } },
            update: {},
            create: { amount: '1000', unit: Unit.MILLILITER, dessertId: 1, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 1 } },
            update: {},
            create: { amount: '70', unit: Unit.GRAMM as Unit, dessertId: 1, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 1 } },
            update: {},
            create: { amount: '300', unit: Unit.GRAMM as Unit, dessertId: 1, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 2 } },
            update: {},
            create: { amount: '6', unit: Unit.PIECES, dessertId: 2, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 2 } },
            update: {},
            create: { amount: '600', unit: Unit.GRAMM as Unit, dessertId: 2, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 2 } },
            update: {},
            create: { amount: '200', unit: Unit.MILLILITER, dessertId: 2, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 2 } },
            update: {},
            create: { amount: '70', unit: Unit.GRAMM as Unit, dessertId: 2, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 2 } },
            update: {},
            create: { amount: '1000', unit: Unit.GRAMM as Unit, dessertId: 2, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 15 } },
            update: {},
            create: { amount: '2', unit: Unit.PIECES, dessertId: 15, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 15 } },
            update: {},
            create: { amount: '300', unit: Unit.GRAMM as Unit, dessertId: 15, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 15 } },
            update: {},
            create: { amount: '70', unit: Unit.GRAMM as Unit, dessertId: 15, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 15 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 15, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 15 } },
            update: {},
            create: { amount: '10', unit: Unit.GRAMM as Unit, dessertId: 15, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 15 } },
            update: {},
            create: { amount: '400', unit: Unit.MILLILITER, dessertId: 15, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 15 } },
            update: {},
            create: { amount: '50', unit: Unit.GRAMM as Unit, dessertId: 15, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 7, dessertId: 15 } },
            update: {},
            create: { amount: '700', unit: Unit.GRAMM as Unit, dessertId: 15, ingredientId: 7 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 13 } },
            update: {},
            create: { amount: '7', unit: Unit.PIECES, dessertId: 13, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 13 } },
            update: {},
            create: { amount: '300', unit: Unit.GRAMM as Unit, dessertId: 13, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 13 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 13, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 13 } },
            update: {},
            create: { amount: '80', unit: Unit.GRAMM as Unit, dessertId: 13, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 8, dessertId: 13 } },
            update: {},
            create: { amount: '600', unit: Unit.MILLILITER, dessertId: 13, ingredientId: 8 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 13 } },
            update: {},
            create: { amount: '1000', unit: Unit.GRAMM as Unit, dessertId: 13, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 9 } },
            update: {},
            create: { amount: '3', unit: Unit.PIECES, dessertId: 9, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 9 } },
            update: {},
            create: { amount: '600', unit: Unit.GRAMM as Unit, dessertId: 9, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 9 } },
            update: {},
            create: { amount: '100', unit: Unit.GRAMM as Unit, dessertId: 9, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 8, dessertId: 9 } },
            update: {},
            create: { amount: '200', unit: Unit.MILLILITER, dessertId: 9, ingredientId: 8 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 9 } },
            update: {},
            create: { amount: '900', unit: Unit.GRAMM as Unit, dessertId: 9, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 17 } },
            update: {},
            create: { amount: '3', unit: Unit.PIECES, dessertId: 17, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 17 } },
            update: {},
            create: { amount: '400', unit: Unit.GRAMM as Unit, dessertId: 17, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 17 } },
            update: {},
            create: { amount: '80', unit: Unit.GRAMM as Unit, dessertId: 17, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 17 } },
            update: {},
            create: { amount: '20', unit: Unit.GRAMM as Unit, dessertId: 17, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 17 } },
            update: {},
            create: { amount: '800', unit: Unit.MILLILITER, dessertId: 17, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 17 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 17, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 17 } },
            update: {},
            create: { amount: '500', unit: Unit.GRAMM as Unit, dessertId: 17, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 10 } },
            update: {},
            create: { amount: '6', unit: Unit.PIECES, dessertId: 10, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 10 } },
            update: {},
            create: { amount: '200', unit: Unit.GRAMM as Unit, dessertId: 10, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 10 } },
            update: {},
            create: { amount: '10', unit: Unit.GRAMM as Unit, dessertId: 10, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 10 } },
            update: {},
            create: { amount: '70', unit: Unit.GRAMM as Unit, dessertId: 10, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 10 } },
            update: {},
            create: { amount: '20', unit: Unit.GRAMM as Unit, dessertId: 10, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 8, dessertId: 10 } },
            update: {},
            create: { amount: '300', unit: Unit.MILLILITER, dessertId: 10, ingredientId: 8 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 10 } },
            update: {},
            create: { amount: '800', unit: Unit.GRAMM as Unit, dessertId: 10, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 16 } },
            update: {},
            create: { amount: '2', unit: Unit.PIECES, dessertId: 16, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 16 } },
            update: {},
            create: { amount: '400', unit: Unit.GRAMM as Unit, dessertId: 16, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 16 } },
            update: {},
            create: { amount: '80', unit: Unit.GRAMM as Unit, dessertId: 16, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 16 } },
            update: {},
            create: { amount: '500', unit: Unit.MILLILITER, dessertId: 16, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 16 } },
            update: {},
            create: { amount: '50', unit: Unit.GRAMM as Unit, dessertId: 16, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 16 } },
            update: {},
            create: { amount: '900', unit: Unit.GRAMM as Unit, dessertId: 16, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 7 } },
            update: {},
            create: { amount: '4', unit: Unit.PIECES, dessertId: 7, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 7 } },
            update: {},
            create: { amount: '100', unit: Unit.GRAMM as Unit, dessertId: 7, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 7 } },
            update: {},
            create: { amount: '10', unit: Unit.GRAMM as Unit, dessertId: 7, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 8, dessertId: 7 } },
            update: {},
            create: { amount: '800', unit: Unit.MILLILITER, dessertId: 7, ingredientId: 8 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 7 } },
            update: {},
            create: { amount: '900', unit: Unit.GRAMM as Unit, dessertId: 7, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 11 } },
            update: {},
            create: { amount: '1', unit: Unit.PIECES, dessertId: 11, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 11 } },
            update: {},
            create: { amount: '900', unit: Unit.GRAMM as Unit, dessertId: 11, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 11 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 11, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 11 } },
            update: {},
            create: { amount: '600', unit: Unit.MILLILITER, dessertId: 11, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 11 } },
            update: {},
            create: { amount: '90', unit: Unit.GRAMM as Unit, dessertId: 11, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 11 } },
            update: {},
            create: { amount: '500', unit: Unit.GRAMM as Unit, dessertId: 11, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 14 } },
            update: {},
            create: { amount: '4', unit: Unit.PIECES, dessertId: 14, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 14 } },
            update: {},
            create: { amount: '100', unit: Unit.GRAMM as Unit, dessertId: 14, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 14 } },
            update: {},
            create: { amount: '20', unit: Unit.GRAMM as Unit, dessertId: 14, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 14 } },
            update: {},
            create: { amount: '80', unit: Unit.GRAMM as Unit, dessertId: 14, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 14 } },
            update: {},
            create: { amount: '900', unit: Unit.MILLILITER, dessertId: 14, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 14 } },
            update: {},
            create: { amount: '20', unit: Unit.GRAMM as Unit, dessertId: 14, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 14 } },
            update: {},
            create: { amount: '1000', unit: Unit.GRAMM as Unit, dessertId: 14, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 6 } },
            update: {},
            create: { amount: '8', unit: Unit.PIECES, dessertId: 6, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 6 } },
            update: {},
            create: { amount: '400', unit: Unit.GRAMM as Unit, dessertId: 6, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 6 } },
            update: {},
            create: { amount: '20', unit: Unit.GRAMM as Unit, dessertId: 6, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 6 } },
            update: {},
            create: { amount: '100', unit: Unit.GRAMM as Unit, dessertId: 6, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 8, dessertId: 6 } },
            update: {},
            create: { amount: '600', unit: Unit.MILLILITER, dessertId: 6, ingredientId: 8 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 6 } },
            update: {},
            create: { amount: '800', unit: Unit.GRAMM as Unit, dessertId: 6, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 5 } },
            update: {},
            create: { amount: '10', unit: Unit.PIECES, dessertId: 5, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 5 } },
            update: {},
            create: { amount: '200', unit: Unit.GRAMM as Unit, dessertId: 5, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 5 } },
            update: {},
            create: { amount: '40', unit: Unit.GRAMM as Unit, dessertId: 5, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 5 } },
            update: {},
            create: { amount: '30', unit: Unit.GRAMM as Unit, dessertId: 5, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 5 } },
            update: {},
            create: { amount: '1000', unit: Unit.MILLILITER, dessertId: 5, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 5 } },
            update: {},
            create: { amount: '80', unit: Unit.GRAMM as Unit, dessertId: 5, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 5 } },
            update: {},
            create: { amount: '500', unit: Unit.GRAMM as Unit, dessertId: 5, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 19 } },
            update: {},
            create: { amount: '8', unit: Unit.PIECES, dessertId: 19, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 19 } },
            update: {},
            create: { amount: '700', unit: Unit.GRAMM as Unit, dessertId: 19, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 19 } },
            update: {},
            create: { amount: '80', unit: Unit.GRAMM as Unit, dessertId: 19, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 19 } },
            update: {},
            create: { amount: '900', unit: Unit.MILLILITER, dessertId: 19, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 19 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 19, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 19 } },
            update: {},
            create: { amount: '300', unit: Unit.GRAMM as Unit, dessertId: 19, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 8 } },
            update: {},
            create: { amount: '7', unit: Unit.PIECES, dessertId: 8, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 8 } },
            update: {},
            create: { amount: '300', unit: Unit.GRAMM as Unit, dessertId: 8, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 8 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 8, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 8 } },
            update: {},
            create: { amount: '600', unit: Unit.MILLILITER, dessertId: 8, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 8 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 8, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 7, dessertId: 8 } },
            update: {},
            create: { amount: '600', unit: Unit.GRAMM as Unit, dessertId: 8, ingredientId: 7 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 4 } },
            update: {},
            create: { amount: '3', unit: Unit.PIECES, dessertId: 4, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 4 } },
            update: {},
            create: { amount: '800', unit: Unit.GRAMM as Unit, dessertId: 4, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 4 } },
            update: {},
            create: { amount: '50', unit: Unit.GRAMM as Unit, dessertId: 4, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 4 } },
            update: {},
            create: { amount: '10', unit: Unit.GRAMM as Unit, dessertId: 4, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 8, dessertId: 4 } },
            update: {},
            create: { amount: '800', unit: Unit.MILLILITER, dessertId: 4, ingredientId: 8 }
        }
        ,
        {
            where: { id: { ingredientId: 7, dessertId: 4 } },
            update: {},
            create: { amount: '700', unit: Unit.GRAMM as Unit, dessertId: 4, ingredientId: 7 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 20 } },
            update: {},
            create: { amount: '2', unit: Unit.PIECES, dessertId: 20, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 20 } },
            update: {},
            create: { amount: '200', unit: Unit.GRAMM as Unit, dessertId: 20, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 20 } },
            update: {},
            create: { amount: '30', unit: Unit.GRAMM as Unit, dessertId: 20, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 20 } },
            update: {},
            create: { amount: '70', unit: Unit.GRAMM as Unit, dessertId: 20, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 8, dessertId: 20 } },
            update: {},
            create: { amount: '300', unit: Unit.MILLILITER, dessertId: 20, ingredientId: 8 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 20 } },
            update: {},
            create: { amount: '300', unit: Unit.GRAMM as Unit, dessertId: 20, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 12 } },
            update: {},
            create: { amount: '7', unit: Unit.PIECES, dessertId: 12, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 12 } },
            update: {},
            create: { amount: '800', unit: Unit.GRAMM as Unit, dessertId: 12, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 12 } },
            update: {},
            create: { amount: '10', unit: Unit.GRAMM as Unit, dessertId: 12, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 12 } },
            update: {},
            create: { amount: '800', unit: Unit.MILLILITER, dessertId: 12, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 12 } },
            update: {},
            create: { amount: '80', unit: Unit.GRAMM as Unit, dessertId: 12, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 12 } },
            update: {},
            create: { amount: '900', unit: Unit.GRAMM as Unit, dessertId: 12, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 18 } },
            update: {},
            create: { amount: '8', unit: Unit.PIECES, dessertId: 18, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 18 } },
            update: {},
            create: { amount: '600', unit: Unit.GRAMM as Unit, dessertId: 18, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 3, dessertId: 18 } },
            update: {},
            create: { amount: '70', unit: Unit.GRAMM as Unit, dessertId: 18, ingredientId: 3 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 18 } },
            update: {},
            create: { amount: '100', unit: Unit.GRAMM as Unit, dessertId: 18, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 18 } },
            update: {},
            create: { amount: '500', unit: Unit.MILLILITER, dessertId: 18, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 18 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 18, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 18 } },
            update: {},
            create: { amount: '500', unit: Unit.GRAMM as Unit, dessertId: 18, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 3 } },
            update: {},
            create: { amount: '1', unit: Unit.PIECES, dessertId: 3, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 3 } },
            update: {},
            create: { amount: '1000', unit: Unit.GRAMM as Unit, dessertId: 3, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 4, dessertId: 3 } },
            update: {},
            create: { amount: '70', unit: Unit.GRAMM as Unit, dessertId: 3, ingredientId: 4 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 3 } },
            update: {},
            create: { amount: '10', unit: Unit.GRAMM as Unit, dessertId: 3, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 3 } },
            update: {},
            create: { amount: '500', unit: Unit.MILLILITER, dessertId: 3, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 3 } },
            update: {},
            create: { amount: '60', unit: Unit.GRAMM as Unit, dessertId: 3, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 3 } },
            update: {},
            create: { amount: '900', unit: Unit.GRAMM as Unit, dessertId: 3, ingredientId: 5 }
        }
        ,
        {
            where: { id: { ingredientId: 2, dessertId: 21 } },
            update: {},
            create: { amount: '10', unit: Unit.PIECES, dessertId: 21, ingredientId: 2 }
        }
        ,
        {
            where: { id: { ingredientId: 1, dessertId: 21 } },
            update: {},
            create: { amount: '800', unit: Unit.GRAMM as Unit, dessertId: 21, ingredientId: 1 }
        }
        ,
        {
            where: { id: { ingredientId: 9, dessertId: 21 } },
            update: {},
            create: { amount: '90', unit: Unit.GRAMM as Unit, dessertId: 21, ingredientId: 9 }
        }
        ,
        {
            where: { id: { ingredientId: 10, dessertId: 21 } },
            update: {},
            create: { amount: '500', unit: Unit.MILLILITER, dessertId: 21, ingredientId: 10 }
        }
        ,
        {
            where: { id: { ingredientId: 6, dessertId: 21 } },
            update: {},
            create: { amount: '100', unit: Unit.GRAMM as Unit, dessertId: 21, ingredientId: 6 }
        }
        ,
        {
            where: { id: { ingredientId: 5, dessertId: 21 } },
            update: {},
            create: { amount: '600', unit: Unit.GRAMM as Unit, dessertId: 21, ingredientId: 5 }
        }
    ].forEach((async dessertIngredients => await prisma.dessertIngredient.upsert(dessertIngredients)))
}

async function main() {
    await dessert()
    await ingredient()
    await dessertIngredients()
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })