# Recursos Humanos

**Recursos Humanos** es una aplicación web diseñada para gestionar empleados. El proyecto está estructurado en dos partes:

* **Backend**: API REST construida con Spring Boot.
* **Frontend**: Interfaz de usuario desarrollada con React.

---

## 🧰 Tecnologías utilizadas

### Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Spring Web
* H2 Database (modo desarrollo)
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
* La consola de H2 estará en: `http://localhost:8080/h2-console` (usuario: `sa`, sin contraseña)

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
* **Interfaz intuitiva**: Navegación sencilla y amigable para el usuario.
* **API RESTful**: Endpoints bien definidos para operaciones CRUD.

---


