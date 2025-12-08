# 💰 CASH — Plataforma de gestión financiera personal

## 🧾 Descripción del proyecto

**CASH** es una plataforma web informativa que presenta el concepto de una aplicación digital diseñada para ayudar a los usuarios a **gestionar sus finanzas personales** de forma sencilla, rápida y segura.  
El sitio permite conocer los servicios ofrecidos, resolver dudas frecuentes, contactar con el equipo y descubrir la filosofía de la empresa.

El objetivo principal del proyecto es **crear una estructura web completa y accesible**, cumpliendo los estándares del **W3C** y utilizando **únicamente HTML5 semántico**, sin CSS ni JavaScript.

---

## 🌐 Temática elegida

El tema del sitio gira en torno a la **gestión financiera inteligente**: ahorro, control de gastos y automatización de finanzas personales. Ademas el usuario puede ingresar todos los datos de forma manual si quiere.
CASH se plantea como una marca moderna, profesional y confiable, orientada tanto a usuarios individuales como a familias que buscan optimizar su economía.

---

## 🏗️ Estructura del sitio

El sitio está compuesto por **seis páginas HTML** principales, todas enlazadas entre sí mediante un menú de navegación común y un pie de página informativo.

### 1. `index.html` — Página principal
- Presenta el nombre y eslogan de la plataforma.
- Descripcion y botones con una supuesta imagen previa de lo que seria el dashboard o app en si misma
- Como funciona el servicio
- Caracteristicas principales
- Testimonios de los usuarios
- Mensaje incentivador

### 2. `servicios.html`
- Muestra cada servicio con su logo, descripcion y caracteristicas (Free, Standard, Professional y Enterprise)
- Tabla comparativa de caracteristicas
- Por que elegir a la empresa
- Comunidad y blog

### 3. `blog.html`
- Ultimo post destacado
- Post de equipo directivo, diseñadores y desarrolladores

### 4. `FAQ.html`
- Preguntas Generales
- Uso de la plataforma
- Soporte Tecnico
- Planes y pagos
- Cuenta y seguridad
- Privacidad y datos

### 5. `contacto.html`
- Caracteristicas de contactar en si
- Contiene un **formulario de contacto** para que los usuarios puedan enviar consultas o sugerencias.
- Temas de contacto
### 6. `about.html`
- Página dedicada a la historia, misión y valores de la empresa.
- Presenta al equipo y la visión general del proyecto.
- Frase

---

## 🧩 Decisiones de diseño estructural

Todo a sido validado en https://validator.w3.org/

1. **Estructura semántica clara:** Se utilizaron etiquetas HTML5 semánticas (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`) para asegurar la accesibilidad, legibilidad y cumplimiento de las normas del W3C.

2. **Navegación uniforme:** El menú `<nav>` aparece en todas las páginas con los mismos enlaces, permitiendo al usuario desplazarse fácilmente por el sitio.

3. **Jerarquía visual mediante encabezados:** Cada página usa un `<h1>` para el título principal y `<h2>` o `<h3>` para subdividir la información de manera lógica y ordenada.

4. **Uso de `<details>` y `<summary>` en la FAQ:** Permite mostrar u ocultar respuestas sin necesidad de JavaScript, mejorando la experiencia de lectura.

5. **Accesibilidad y etiquetas alt:** Todas las imágenes incluyen textos alternativos (`alt`) para cumplir con los estándares de accesibilidad.

6. **Estructura coherente del footer:** El pie de página se repite en todas las páginas con enlaces secundarios (políticas, redes sociales y créditos del autor).

7. **Enlaces funcionales entre páginas:** Todos los botones y elementos de navegación están implementados únicamente con HTML, siguiendo las buenas prácticas (uso de `<a>` en lugar de `<button>` cuando se redirige a otra página).

---

## ✨ Estilizado CSS

La capa de presentación fue diseñada bajo los principios de **modularidad, accesibilidad y coherencia visual**, utilizando exclusivamente CSS3.

1.  **Normalización y Variables CSS:**
   * Se definieron variables globales en `:root` para la paleta de colores (`--color-primary`, `--color-secondary`) y las escalas tipográficas (`--font-size-xl`, etc.), asegurando la consistencia estética y facilitando futuras modificaciones.
   * Se utiliza la unidad de medida **`rem`** de manera predominante para garantizar la accesibilidad y la escalabilidad del diseño.

2.  **Diseño Moderno y Responsivo:**
   * Se emplearon **Flexbox** y **CSS Grid** para la creación de layouts complejos como la tabla de planes (`servicios.html`), la cabecera, y las tarjetas de posts del blog, optimizando el rendimiento y el control de espaciado (`gap`).

3.  **Coherencia Estética y Animaciones:**
   * Se aplicó un estilo coherente de **tarjetas elevadas** (con `box-shadow` y `transition`) a elementos clave como los planes de servicio, los posts del blog y las preguntas frecuentes (FAQ), proporcionando una jerarquía visual clara.
   * Se implementaron micro-interacciones mediante la pseudo-clase `:hover`, destacando elementos (como el botón del modo oscuro) y añadiendo dinamismo.
   * Se utilizó la propiedad `transform` para crear animaciones fluidas y eficientes (ej. la expansión del borde en la cita destacada).

4.  **Soporte Dark Mode (Lógica CSS):**
   * Se establecieron variables de color semánticas en `:root` para el modo claro por defecto.
   * Se definió la clase **`.dark-mode`** y se incluyó la Media Query **`@media (prefers-color-scheme: dark)`** para invertir automáticamente el esquema de color (fondos oscuros, textos claros), ofreciendo soporte nativo y manual.

---

## 👨‍💻 Autor

**Gonzalo Blanco Mosteiro** 1º DAW — Módulo de Lenguaje de Marcas  
Proyecto: *Sitio web CASH* Año: **2025**