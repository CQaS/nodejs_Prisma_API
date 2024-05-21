import express from 'express'
import categoriasRoutes from './routes/categorias.routes.js'
import productosRoutes from './routes/productos.routes.js'

const app = express()
app.use(express.json())

app.use('/api', categoriasRoutes)
app.use('/api', productosRoutes)

app.listen(3000, () => {
    console.log('listening on port 3000 http://localhost:3000')
})