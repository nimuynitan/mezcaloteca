# Mezcaloteca

App personal para gestionar una colección de mezcales artesanales y ancestrales. HTML + CSS + JS vanilla, sin dependencias, instalable como PWA.

**Demo:** [nimuynitan.github.io/mezcaloteca](https://nimuynitan.github.io/mezcaloteca/)

## Qué hace

- Catálogo filtrable por región, variedad, especie, productor, tipo y ubicación
- Alta, edición y baja de botellas desde la interfaz
- Foto por botella (se redimensiona a 400px y se comprime automáticamente)
- Exportar e importar backup en JSON
- Instalable como app en celular y escritorio
- Funciona offline una vez instalada

## Dónde viven los datos

Los datos viven en el **localStorage del navegador** de cada dispositivo. No hay backend, no hay sincronización entre dispositivos y nada viaja al repo.

Flujo típico entre dispositivos:

1. Cargar botellas en la compu → quedan en la compu
2. Exportar JSON
3. Abrir en el celular (o en otra compu) → ver base semilla sin fotos
4. Importar el JSON → tener lo mismo

**Backup:** exportar JSON cada tanto y guardarlo en Drive/Dropbox. Si el navegador limpia los datos del sitio, el localStorage se borra.

## Estructura

```
mezcaloteca/
├── index.html        ← Estructura y meta tags PWA
├── styles.css        ← Todos los estilos
├── app.js            ← Lógica + base semilla (SEED)
├── manifest.json     ← Manifiesto PWA
├── sw.js             ← Service Worker (offline)
├── icons/
│   ├── icon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   └── favicon-96.png
└── README.md
```

## Correr en local

```bash
python3 -m http.server 8000
```

Abrir `http://localhost:8000` en el navegador. Es necesario un servidor (no abrir el HTML con doble clic) para que el Service Worker se registre.

## Deploy en GitHub Pages

1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / root
4. Guardar

La URL queda `https://nimuynitan.github.io/mezcaloteca/` en 1-2 minutos.

## Actualizar

Para publicar cambios al código:

1. Editar los archivos
2. Subir el cambio a `main` de GitHub
3. **Importante:** si cambiaron archivos del app shell, incrementar `CACHE_VERSION` en `sw.js` (de `mezcaloteca-v1` a `mezcaloteca-v2`, etc.) para que los usuarios bajen la nueva versión en lugar del cache viejo

## Agregar/editar la base semilla

La constante `SEED` al principio de `app.js` tiene los 38 mezcales base. Solo se carga en la primera visita. Cambiar el SEED no actualiza la base de los usuarios que ya cargaron la app — para eso tienen que borrar el localStorage del sitio.

## Licencia

Proyecto personal. Sin licencia explícita.
