# TheSphere

## Descripción
TheSphere es una plataforma web diseñada para conectar a diseñadores y desarrolladores. Los usuarios pueden registrarse, iniciar sesión, publicar proyectos, comentar en publicaciones, y ver perfiles de otros usuarios. El proyecto está construido utilizando React en el frontend y Spring Boot en el backend.

## Estructura del Proyecto
El proyecto se divide en dos partes principales:
- **Frontend:** Construido con React.
- **Backend:** Construido con Spring Boot.

## Instalación y Configuración

### Guía de Instalación para el Administrador

Existen dos formas de instalar y correr la aplicación, desplegando el contenedor Docker o instalando en local las dependencias. Recomendamos encarecidamente desplegar con Docker para evitar incompatibilidades.  

#### Requisitos Previos

Antes de comenzar, asegúrese de tener instalados los siguientes componentes en su sistema (Si despliega con Docker solo necesita Docker como requisito previo): 

- Node.js (v16 o superior)
- npm (v6 o superior)
- JDK (Java Development Kit) 17
- Maven (v3.6 o superior)
- MySQL (o cualquier otra base de datos compatible con JDBC)
- Docker y Docker Compose

#### Instalación con Docker Compose (Recomendada)

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/BreaGG/TheSphere
   cd Fronted
   ```
   
2. **Construir y levantar los contenedores:**
   ```bash
   docker-compose up --build
   ```

Este comando construirá las imágenes Docker para el frontend y el backend, y luego levantará todos los servicios definidos en docker-compose.yml.

3. **Acceder a la Aplicación:**
   - El frontend estará disponible en `http://localhost:5173`
   - El backend estará disponible en `http://localhost:8080`

#### Instalación del Frontend (React + Vite)

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/BreaGG/TheSphere
   cd Fronted
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Esto iniciará el servidor de desarrollo y la aplicación estará disponible en `http://localhost:5173`.

4. **Compilar la aplicación para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar la aplicación compilada:**
   ```bash
   npm run preview
   ```

#### Instalación del Backend (Spring Boot)

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/BreaGG/TheSphere
   cd Backend
   ```

2. **Configurar la base de datos:**
   Cree una base de datos en MySQL y actualice el archivo `application.properties` en el proyecto Spring Boot con las credenciales de la base de datos.
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/mi_base_de_datos
   spring.datasource.username=mi_usuario
   spring.datasource.password=mi_contraseña
   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Compilar y ejecutar la aplicación:**
   ```bash
   ./mvn clean install
   ./mvn spring-boot:run
   ```
   Esto iniciará el servidor backend y estará disponible en `http://localhost:8080`.

#### Dependencias Utilizadas

##### Frontend (`package.json`)

- **Dependencies:**
  - `axios`: ^1.7.2
  - `cloudinary`: ^2.2.0
  - `react`: ^18.2.0
  - `react-dom`: ^18.2.0
  - `react-router-dom`: ^6.23.1
  - `react-markdown`: ^9.0.1
  - `react-syntax-highlighter`: ^15.5.0
  - `copy-to-clipboard`: ^3.3.3

- **DevDependencies:**
  - `@types/react`: ^18.2.66
  - `@types/react-dom`: ^18.2.22
  - `@vitejs/plugin-react`: ^4.2.1
  - `eslint`: ^8.57.0
  - `eslint-plugin-react`: ^7.34.1
  - `eslint-plugin-react-hooks`: ^4.6.0
  - `eslint-plugin-react-refresh`: ^0.4.6
  - `vite`: ^5.2.0

##### Backend (`pom.xml`)

- **Spring Boot Dependencies:**
  - `spring-boot-starter-actuator`
  - `spring-boot-starter-data-jpa`
  - `spring-boot-starter-thymeleaf`
  - `spring-boot-starter-web`
  - `thymeleaf-extras-springsecurity6`
  - `spring-boot-devtools`
  - `mysql-connector-j`
  - `lombok`
  - `spring-boot-starter-test`
  - `spring-security-test`

- **Plugins:**
  - `spring-boot-maven-plugin`

#### Notas Adicionales

- Asegúrese de que el puerto 3306 de MySQL y los puertos 3000 y 8080 para las aplicaciones frontend y backend respectivamente, estén abiertos y disponibles.
- Para personalizar la configuración del servidor de desarrollo o de la compilación, modifique los scripts en el archivo `package.json` y las propiedades en el archivo `pom.xml` y `application.properties`.

## Uso de la Aplicación

### Registro e Inicio de Sesión
- Los usuarios pueden registrarse en la plataforma proporcionando su email, nombre de usuario, contraseña, país, biografía y fotos de perfil y encabezado.
- Los usuarios pueden iniciar sesión utilizando su email y contraseña.

### Publicación de Proyectos
- Los usuarios loggeados pueden crear nuevas publicaciones proporcionando título, tecnologías, subtítulos, descripciones y una URL de medios.
- Los usuarios pueden editar y eliminar sus propias publicaciones.

### Comentarios
- Los usuarios loggeados pueden comentar en las publicaciones proporcionando contenido para el comentario.
- Los comentarios muestran la foto de perfil y el nombre de usuario del comentarista.

### Perfiles de Usuarios
- Los usuarios pueden ver los perfiles de otros usuarios, que incluyen biografía, país, foto de perfil, foto de encabezado y proyectos publicados.
- Si el usuario loggeado está viendo su propio perfil, verá un botón para editar su perfil.

### Usuarios Aleatorios
- En los perfiles de usuarios, se muestran tres usuarios aleatorios en la sección lateral para fomentar la exploración de la comunidad.

## Componentes Principales

### Frontend

#### Componentes
- **Login:** Formulario de inicio de sesión.
- **Register:** Formulario de registro.
- **Navbar:** Barra de navegación con búsqueda y enlace al perfil del usuario loggeado.
- **Footer:** Pie de página de la aplicación.
- **Feed:** Muestra las publicaciones con opción de carga adicional.
- **PostDetails:** Detalles de una publicación con comentarios y formulario para nuevos comentarios.
- **UserDetails:** Detalles del perfil de usuario con proyectos publicados y usuarios aleatorios.
- **PostForm:** Formulario para crear nuevas publicaciones.
- **CommentsSection:** Sección para mostrar y añadir comentarios.

#### Contextos
- **UserContext:** Proporciona información del usuario loggeado en toda la aplicación.

### Backend

#### Controladores
- **usersRestcontroller:** Maneja las rutas para operaciones de usuario como registro, inicio de sesión, obtención de usuarios y eliminación de usuarios.
- **postsRestcontroller:** Maneja las rutas para operaciones de publicaciones como creación, obtención y eliminación de publicaciones.
- **commentsRestcontroller:** Maneja las rutas para operaciones de comentarios como creación y obtención de comentarios.

#### Modelos
- **userModel:** Representa la entidad de usuario en la base de datos.
- **postModel:** Representa la entidad de publicación en la base de datos.
- **commentModel:** Representa la entidad de comentario en la base de datos.

#### Servicios
- **usersService:** Proporciona lógica de negocio para operaciones de usuario.
- **postsService:** Proporciona lógica de negocio para operaciones de publicaciones.
- **commentsService:** Proporciona lógica de negocio para operaciones de comentarios.

## Base de Datos

### Esquema
El esquema de la base de datos incluye las siguientes tablas:
- **users:** Almacena la información de los usuarios.
- **posts:** Almacena la información de las publicaciones.
- **comments:** Almacena la información de los comentarios.

### Consultas SQL de Ejemplo

#### Insertar Usuarios
```sql
INSERT INTO users (username, password, email, bio, profilePic, headerPic, country) VALUES
('Alex Suarez', 'contraseña1', 'usuario1@example.com', 'Biografía del usuario 1.', 'https://example.com/profile1.jpg', 'https://example.com/header1.jpg', 'España'),
('Marco Rossi', 'contraseña2', 'usuario2@example.com', 'Biografía del usuario 2.', 'https://example.com/profile2.jpg', 'https://example.com/header2.jpg', 'México');
```

#### Insertar Publicaciones
```sql
INSERT INTO posts (title, technologies, subTitle, description, media, user_id, category) VALUES
('Proyecto 1', 'React, Node.js', 'Subtítulo 1', 'Descripción 1', 'https://example.com/media1.jpg', 1, 'DESIGN'),
('Proyecto 2', 'Angular, Spring Boot', 'Subtítulo 2', 'Descripción 2', 'https://example.com/media2.jpg', 2, 'DEVELOPMENT');
```

#### Insertar Comentarios
```sql
INSERT INTO comments (content, user_id, post_id) VALUES
('¡Increíble proyecto!', 1, 1),
('Muy interesante.', 2, 1);
```