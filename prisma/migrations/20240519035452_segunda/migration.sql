-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "precio" INTEGER NOT NULL DEFAULT 999,
    "creado_el" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoria_Id" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Producto_categoria_Id_fkey" FOREIGN KEY ("categoria_Id") REFERENCES "Categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Producto" ("categoria_Id", "creado_el", "id", "nombre", "precio") SELECT "categoria_Id", "creado_el", "id", "nombre", "precio" FROM "Producto";
DROP TABLE "Producto";
ALTER TABLE "new_Producto" RENAME TO "Producto";
CREATE UNIQUE INDEX "Producto_nombre_key" ON "Producto"("nombre");
PRAGMA foreign_key_check("Producto");
PRAGMA foreign_keys=ON;
