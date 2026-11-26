# Spotify

# 🎵 Spotify Clone (Angular)

Clon de la interfaz web de **Spotify** desarrollado con **Angular 22** y **TypeScript**. Actualmente cuenta con la arquitectura base de diseño (*layout*) y los componentes principales maquetados.

---

## 🛠️ Tecnologías utilizadas

* **Framework:** Angular `^22.0.0` (Standalone Components & Signals)
* **Lenguaje:** TypeScript `~6.0.2`
* **Estilos:** CSS3 (Flexbox)
* **Testing:** Vitest `^4.0.8` & JSDOM
* **Formateo de código:** Prettier `^3.8.1`

---

## 📂 Estructura del proyecto

```text
src/
└── app/
    ├── components/
    │   ├── header/      # Barra superior (Buscador)
    │   ├── player/      # Barra inferior (Reproductor de audio)
    │   └── sidebar/     # Barra lateral izquierda (Playlists y navegación)
    ├── pages/
    │   └── home/        # Vista principal (Inicio)
    ├── app.config.ts    # Configuración global y enrutamiento
    ├── app.routes.ts    # Definición de rutas
    └── app.ts           # Componente raíz
```[cite: 1]

---

## 🚀 Requisitos previos

Asegúrate de tener instalado:
* **Node.js** (versión LTS recomendada)
* **npm** (`11.x` o superior)[cite: 1]

---

## 📦 Instalación y ejecución

1. **Instalar las dependencias:**
   ```bash
   npm install
