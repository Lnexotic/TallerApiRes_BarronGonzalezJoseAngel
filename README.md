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



---

## 📁 Estructura del Proyecto

La estructura del proyecto es clara y organizada:
```
TallerApiRes_BarronGonzalezJoseAngel/
├── index.js # Archivo principal donde se configura el servidor Express.
├── package.json # Define las dependencias y scripts del proyecto.
├── package-lock.json # Bloquea las versiones exactas de las dependencias.
├── .gitignore # Lista de archivos y carpetas que Git debe ignorar.
└── README.md # Documentación del proyecto.
```
