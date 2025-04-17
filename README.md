<h1 align="center">Generador de Arreglos</h1>
<p align="center"><a href="#descripcion-del-proyecto">Descripción del Proyecto</a> - <a href="#caracteristicas-clave">Características clave</a> - <a href="#uso">Uso</a></p>

## Descripción del Proyecto

Script en Node.js que permite leer un archivo de Excel con estructura jerárquica (celdas combinadas) y extraer de manera automática los valores numéricos (por ejemplo, secciones) organizados por grupo. El resultado se exporta a un archivo .txt, con cada grupo en una línea, listo para usar en desarrollo o procesamiento posterior.

Este proyecto es ideal para organizar datos cuando trabajas con hojas de Excel con estructuras semi-estructuradas o celdas combinadas, como listados de secciones, claves, IDs o códigos.

## Requisitos

* Node.js v14 o superior
* npm (incluido con Node.js)
* Archivo Excel (.xlsx) estructurado con:
  - Número de grupo en la columna A (puede haber celdas combinadas)
  - Valores numéricos a extraer en la columna F

## Características clave

*   ✅ Soporte para celdas combinadas en Excel
*   📤 Exportación a .txt simple y legible
*   🔍 Detección automática de valores numéricos
*   ⚡ Agrupación automática por bloques jerárquicos
*   🛠 Fácil de modificar o extender (puedes exportar también como .json, .csv, etc.)

## Uso

1. Asegúrate de tener un archivo Excel estructurado como se describe en la sección de requisitos.
2. Ejecuta el siguiente comando para generar el archivo `.txt`:

   ```bash
   node leerSecciones.js
   ```

Esto generará un archivo `secciones.txt` con el contenido estructurado como:

```txt
384, 385, 2030, 2031, 2032, 399, 2027, 2064, 2066, 2065, 2080, 356, 357, 370, 393, 394, 358, 359, 360, 361, 395
```

**Ejemplo de archivo Excel:**

| Grupo | Valor  |
|-------|--------|
| 1     | 384    |
| 1     | 385    |
| 1     | 2030   |
| 2     | 399    |
| 2     | 2027   |