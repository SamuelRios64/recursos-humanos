# Recursos Humanos

**Recursos Humanos** es una aplicación web diseñada para gestionar empleados y departamentos. El proyecto está estructurado en dos partes:

* **Backend**: API REST construida con Spring Boot.
* **Frontend**: Interfaz de usuario desarrollada con React.

---

## 🧰 Tecnologías utilizadas

### Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Spring Web
* Maven

### Frontend

* React
* Axios
* Bootstrap

---

## ⚙️ Requisitos previos

* [Java 17 o Superior](https://adoptium.net/)
* [Node.js](https://nodejs.org/) (versión 16 o superior)
* [Maven](https://maven.apache.org/)
* [Git](https://git-scm.com/)
* Configurar la conexion hacia la base de datos, teniendo en cuenta sus credenciales.
Se tiene que dirigir al archivo ```application.properties``` de la carpeta ```resources``` y colocar sus credenciales, Ejemplo:
```bash
spring.datasource.username=root
spring.datasource.password=root
```

---

## 🚀 Instrucciones para ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/SamuelRios64/recursos-humanos.git
cd recursos-humanos
```

### 2. Ejecutar el Backend

```bash
cd Backend
mvn spring-boot:run
```

* La API estará disponible en: `http://localhost:8080`

### 3. Ejecutar el Frontend

En una nueva terminal:

```bash
cd Frontend
npm install
npm start
```

* La aplicación estará disponible en: `http://localhost:3000`


## 📌 Funcionalidades principales

* **Gestión de empleados**: Crear, listar, actualizar y eliminar empleados.
* **Gestión de departamentos**: Crear, listar, actualizar y eliminar departamentos.
* **Interfaz intuitiva**: Navegación sencilla y amigable para el usuario.
* **API RESTful**: Endpoints bien definidos para operaciones CRUD.

---


