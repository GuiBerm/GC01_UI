# GC01_UI

Este es un proyecto para gestionar una aplicación de frontend utilizando React. Aquí encontrarás las instrucciones para instalar y ejecutar el proyecto desde cero.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes en tu máquina:

- [Node.js](https://nodejs.org/) (versión 16.x o superior recomendada)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) para manejar dependencias.

## Instalación

1. **Clonar el repositorio**

   Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd ui_asee
   ```

2. **Instalar dependencias**

   Ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   npm install
   ```

   O si usas yarn:

   ```bash
   yarn install
   ```

3. **Configuración**

   El proyecto está configurado para interactuar con servicios API alojados en diferentes puertos:

    - Usuario: 8082
    - Contenido: 8081
    - Información adicional: 8083

   Estas URLs se pueden modificar directamente en el archivo `ApiClient.js` correspondiente de cada módulo dentro de la carpeta `src/api`. Por ejemplo:

   ```javascript
   const API_URL = "http://localhost:8082/v1";
   ```

   Si necesitas cambiar la URL origen para un entorno diferente, actualiza esta línea con la nueva URL base.

4. **Ejecución**

    - **Iniciar el servidor de desarrollo**

      Para iniciar el servidor de desarrollo, ejecuta:

      ```bash
      npm start
      ```

      O con yarn:

      ```bash
      yarn start
      ```

    - **Abrir en el navegador**

      Por defecto, la aplicación estará disponible en:

      ```
      http://localhost:3000
      ```
