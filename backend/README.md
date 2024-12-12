# Proyecto Final: API de Blog

## Descripción

Esta API Node.js con Express.js y MongoDB (utilizando Mongoose como ORM) permite la creación, lectura, actualización y eliminación (CRUD) de artículos en un blog. Incorpora un sistema de autenticación basado en JSON Web Tokens (JWT) para garantizar la seguridad de los recursos.

## Tecnologías Utilizadas

* **Backend:** Node.js, Express.js
* **Base de datos:** MongoDB
* **ORM:** Mongoose
* **Autenticación:** JWT

## Estructura de la API

* **Endpoints:**
  * `/articles`:
    * **POST** /articles: Crear un nuevo artículo
    * **GET** /articles: Obtener todos los artículos
    * **GET** /articles/:id: Obtener un artículo específico
    * **PUT** /articles/:id: Actualizar un artículo
    * **DELETE** /articles/:id: Eliminar un artículo
  * `/users`:
    * **POST** /users: Registrar un nuevo usuario
    * **POST** /login: Iniciar sesión y obtener un token JWT

## Estructura de un Artículo en la Base de Datos

```javascript
{
  title: "Título del artículo",
  content: "Contenido del artículo",
  author: "Nombre del autor",
  publishedAt: "Fecha de publicación",
  editedAt: "Fecha de edición",
  category: "Categoría del artículo",
  tags: ["tag1", "tag2", ...]
}

## Funcionalidades Clave
CRUD de Artículos: Permite crear, leer, actualizar y eliminar artículos.
Autenticación: Requiere autenticación JWT para acceder a los recursos protegidos.
Gestión de Usuarios: Permite el registro y el inicio de sesión de usuarios.
Búsqueda de Artículos: Permite buscar artículos por ID.
Usuarios Registrados: Pueden crear, editar y eliminar sus propios artículos.
Roles Futuras: Se puede implementar un sistema de roles para otorgar permisos más granulares (ej: administradores, colaboradores).

Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio que quieras hacer.
