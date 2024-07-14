'use strict'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        const cart = await prisma.cart.findFirst()

        if (!cart) {
            return []
        }

        const cartItems = await prisma.cartItem.findMany({
            where: {
                cartId: cart.id
            },
            include: {
                dessert: true
            }
        })

        return {
            id: cart.id,
            items: cartItems.map(item => ({
                cartItemId: item.id,
                dessertId: item.dessert.id,
                name: item.dessert.name,
                quantity: item.quantity,
                price: item.dessert.price
            }))
        }
    })

    fastify.post('/', async function (request, reply) {
        const { id } = request.body
        let cart = await prisma.cart.findFirst()

        if (!cart) {
            cart = await prisma.cart.create()
        }

        return await prisma.cartItem.create({
            data: {
                dessertId: id,
                quantity: 1,
                cartId: cart.id,
            }
        })
    })

    fastify.delete('/:id', async function (request, reply) {
        const { id } = request.params
        const parsedId = parseInt(id)

        return await prisma.cartItem.delete({
            where: {
                id: parsedId
            }
        })
    })

    fastify.put('/:id', async function (request, reply) {
        const { id, quantity } = request.body
        return await prisma.cartItem.update({
            where: {
                id
            },
            data: {
                quantity
            }
        })
    })
}
