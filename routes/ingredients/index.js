'use strict'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
        return await prisma.ingredient.findMany()
    })
}