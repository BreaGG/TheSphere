# TheSphere

## Descripción
TheSphere es una plataforma web diseñada para conectar a diseñadores y desarrolladores. Los usuarios pueden registrarse, iniciar sesión, publicar proyectos, comentar en publicaciones, y ver perfiles de otros usuarios. El proyecto está construido utilizando React en el frontend y Spring Boot en el backend.

## Estructura del Proyecto
El proyecto se divide en dos partes principales:
- **Frontend:** Construido con React.
- **Backend:** Construido con Spring Boot.

## Instalación y Configuración

### Requisitos Previos
- Node.js
- npm (Node Package Manager)
- Java Development Kit (JDK)
- Spring Boot
- Base de datos MySQL (o cualquier otra base de datos soportada por Spring Boot)

### Configuración del Backend
1. Clona el repositorio del backend.
2. Configura la base de datos en `application.properties`.
3. Construye y ejecuta el proyecto usando Spring Boot.
4. Las siguientes dependencias de Maven son necesarias:
    ```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    ```

### Configuración del Frontend
1. Clona el repositorio del frontend.
2. Navega al directorio del proyecto frontend.
3. Instala las dependencias con el comando:
    ```bash
    npm install
    ```
4. Inicia la aplicación con:
    ```bash
    npm start
    ```

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
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Proyecto 1', 'React, Node.js', 'Subtítulo 1', 'Descripción 1', 'https://example.com/media1.jpg', 1),
('Proyecto 2', 'Angular, Spring Boot', 'Subtítulo 2', 'Descripción 2', 'https://example.com/media2.jpg', 2);
```

#### Insertar Comentarios
```sql
INSERT INTO comments (content, user_id, post_id) VALUES
('¡Increíble proyecto!', 1, 1),
('Muy interesante.', 2, 1);
```