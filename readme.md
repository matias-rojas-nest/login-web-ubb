# Express Login App - UBB

Este es un archivo de aplicación Node.js que utiliza Express para manejar solicitudes HTTP. La aplicación proporciona una funcionalidad básica de inicio de sesión donde los usuarios pueden enviar un usuario y una contraseña, y la aplicación verifica si coinciden con los valores esperados.

## Dependencias

- `express`: Framework web para Node.js que simplifica el manejo de rutas, solicitudes y respuestas HTTP.
- `dotenv`: Carga las variables de entorno desde un archivo .env al proceso de Node.js.
- `cors`: Middleware para permitir solicitudes de recursos de otro origen (CORS).

## Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.

## Configuración

Este archivo espera que se configuren ciertas variables de entorno en un archivo `.env` en el directorio raíz del proyecto. Asegúrate de proporcionar los siguientes valores en el archivo `.env`:

```plaintext
USER_UBB=usuario
PASS_UBB=clave
```

## Uso

Para iniciar el servidor, ejecuta `npm start`. El servidor se ejecutará en el puerto 3003 por defecto. Puedes enviar una solicitud POST a `http://localhost:3003/login` con un cuerpo JSON que contenga un usuario y una clave para verificar el inicio de sesión.

Si las credenciales son correctas, la aplicación responderá con `{ "success": true }`, de lo contrario, responderá con un estado 401 y `{ "success": false, "message": "Usuario o clave incorrectos" }`.

## Notas

- Este es un servicio de Login muy básico y rápido para autenticar a la UBB.
- Asegúrate de proteger las credenciales de acceso en el archivo `.env` y no las incluyas en el repositorio público.
#