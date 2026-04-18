# 🏝️ Astro Server Islands — App de Reseñas

Una aplicación de demostración construida con **Astro** que muestra el patrón **Server Islands** (`server:defer`). Las páginas se pre-renderizan como HTML estático en tiempo de compilación, mientras que los componentes dinámicos se difieren al servidor y se transmiten bajo demanda.

## ✨ Características

- **Server Islands**: El componente de disponibilidad se carga dinámicamente usando `server:defer`, demostrando cómo mezclar contenido estático y dinámico
- **Modo Oscuro/Claro**: Toggle de tema con persistencia en `localStorage`
- **Diseño Editorial**: Estética magazine con tipografía Playfair Display + Source Sans 3
- **Prisma + PostgreSQL**: Base de datos para los lugares y sus reseñas
- **Astro Actions**: Acciones del servidor para obtener datos de forma type-safe

## 🚀 Estructura del Proyecto

```text
/
├── prisma/
│   └── schema.prisma          # Esquema de la base de datos
├── public/
│   └── assets/images/         # Imágenes de los lugares
├── src/
│   ├── actions/
│   │   └── places/            # Acciones: getPlaces, getAvailabilityById
│   ├── components/
│   │   ├── Availability.astro # 🏝️ Server Island (server:defer)
│   │   ├── PlaceCard.astro    # Tarjeta de lugar
│   │   ├── Star.astro         # Estrella de rating
│   │   └── ThemeToggle.astro  # Toggle oscuro/claro
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal con navbar y footer
│   ├── lib/
│   │   └── prisma.ts          # Cliente de Prisma
│   ├── pages/
│   │   ├── index.astro        # Página principal
│   │   └── places/[id].astro  # Página de detalle
│   └── styles/
│       └── global.css         # Sistema de diseño CSS
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                             |
| :------------------ | :------------------------------------------------- |
| `bun install`       | Instala las dependencias                           |
| `bun dev`           | Inicia el servidor de desarrollo en `localhost:4321`|
| `bun build`         | Compila el sitio de producción en `./dist/`        |
| `bun preview`       | Previsualiza la build localmente                   |
| `bun astro ...`     | Ejecuta comandos CLI como `astro add`, `astro check`|

## 🏝️ ¿Qué son las Server Islands?

Las **Server Islands** son una característica de Astro que permite diferir el renderizado de componentes específicos al servidor en tiempo de solicitud, mientras el resto de la página se sirve como HTML estático.

```astro
<!-- La página es estática, pero este componente se renderiza en el servidor bajo demanda -->
<Availability placeId={id} server:defer>
  <p slot="fallback">🏝️ Cargando Server Island…</p>
</Availability>
```

**Beneficios:**
- ⚡ Carga instantánea de la página (HTML estático)
- 🔄 Datos frescos donde los necesitas (componentes dinámicos)
- 🎯 Lo mejor de ambos mundos: rendimiento + dinamismo

## 📚 Más información

- [Documentación de Astro](https://docs.astro.build)
- [Guía de Server Islands](https://docs.astro.build/en/guides/server-islands/)
- [Astro Actions](https://docs.astro.build/en/guides/actions/)
