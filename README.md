# Taller API REST con Node.js y Express

**Nombre del estudiante:** Barrón González José Ángel  
**Carrera:** Ingeniería de Sistemas Computacionales (ISC)  
**Repositorio GitHub:** [https://github.com/Lnexotic/TallerApiRes_BarronGonzalezJoseAngel](https://github.com/Lnexotic/TallerApiRes_BarronGonzalezJoseAngel)

---

## 🎯 Objetivo

Este proyecto tiene como objetivo demostrar la comprensión y aplicación práctica de los conceptos fundamentales para el desarrollo de una API REST utilizando Node.js y Express, tal como se vio en el taller de la materia de Sistemas de Información.

---

## 📦 Dependencias Utilizadas

El proyecto utiliza las siguientes dependencias principales:

*   **Express**: Framework web para Node.js que permite construir APIs REST de manera sencilla.
*   **Nodemon**: Herramienta de desarrollo que reinicia automáticamente el servidor cuando se detectan cambios en los archivos, facilitando la iteración durante el desarrollo.

Estas dependencias se instalan automáticamente al ejecutar `npm install` en la raíz del proyecto.

---

## ⚙️ Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar la API localmente:

1.  **Clonar el repositorio:**
    Abre tu terminal y ejecuta:
    ```bash
    git clone https://github.com/Lnexotic/TallerApiRes_BarronGonzalezJoseAngel.git
    cd TallerApiRes_BarronGonzalezJoseAngel
    ```

2.  **Instalar las dependencias:**
    En la carpeta del proyecto, ejecuta:
    ```bash
    npm install
    ```

3.  **Iniciar el servidor:**
    Para iniciar el servidor en modo de desarrollo (con reinicio automático), ejecuta:
    ```bash
    npm run dev
    ```
    El servidor se iniciará en el puerto `3000`. Puedes probarlo abriendo tu navegador o una herramienta como Postman en la dirección `http://localhost:3000`.

4.  **(Opcional) Iniciar en modo producción:**
    Si deseas iniciar el servidor sin el reinicio automático, puedes usar:
    ```bash
    node index.js
    ```

---

## ✅ Requisitos Técnicos Cumplidos

Este proyecto cumple con los requisitos técnicos solicitados en el taller:

*   **Endpoints REST:** Implementa los métodos HTTP básicos (GET, POST, PUT, DELETE) para gestionar recursos.
*   **Middlewares:** Utiliza middlewares integrados de Express para manejar el análisis de JSON (`express.json()`) y para el manejo de errores.
*   **Módulos de Node.js y Express:** Se hace uso extensivo de los módulos nativos de Node.js y del framework Express para la creación del servidor y la gestión de rutas.

---

## 📁 Estructura del Proyecto

La estructura del proyecto es clara y organizada:
