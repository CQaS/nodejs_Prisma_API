import {
    Router
} from 'express'
import {
    PrismaClient
} from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/categorias', async (req, res) => {
    const categorias = await prisma.categorias.findMany({
        include: {
            producto: true
        }
    })
    res.json(categorias)
})

export default router