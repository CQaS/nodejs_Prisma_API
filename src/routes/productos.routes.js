import {
    Router
} from 'express'
import {
    prisma
} from '../db.js'

const router = Router()

router.get('/productos', async (req, res) => {
    const productos = await prisma.producto.findMany()
    res.json(productos)
    console.log(productos)
})

router.get('/productos/:id', async (req, res) => {
    const unProducto = await prisma.producto.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (!unProducto) res.status(404).json({
        error: 'Producto not found'
    })

    res.json(unProducto)
})

router.post('/productos', async (req, res) => {
    const nuevo_productos = await prisma.producto.create({
        data: req.body
    })
    res.json(nuevo_productos)
})

router.delete('/productos/:id', async (req, res) => {
    const unProductoBorrado = await prisma.producto.delete({
        where: {
            id: parseInt(req.params.id)
        },
        include: {
            categorias: true,
        }
    })

    if (!unProductoBorrado) res.status(404).json({
        error: 'Producto not found'
    })

    res.json({
        seElimino: unProductoBorrado
    })
})

router.put('/productos/:id', async (req, res) => {
    const productoActualizado = await prisma.producto.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: req.body
    })

    res.json({
        actualizado: productoActualizado
    })
})

export default router