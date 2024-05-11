-- Insertar usuarios
INSERT INTO users (username, password, email, profilePic, headerPic) VALUES
('usuario1', 'contraseña1', 'usuario1@example.com', 'ruta/a/imagen1.jpg', 'ruta/a/imagen2.jpg'),
('usuario2', 'contraseña2', 'usuario2@example.com', 'ruta/a/imagen3.jpg', 'ruta/a/imagen4.jpg'),
('usuario3', 'contraseña3', 'usuario3@example.com', 'ruta/a/imagen5.jpg', 'ruta/a/imagen6.jpg'),
('usuario4', 'contraseña4', 'usuario4@example.com', 'ruta/a/imagen7.jpg', 'ruta/a/imagen8.jpg'),
('usuario5', 'contraseña5', 'usuario5@example.com', 'ruta/a/imagen9.jpg', 'ruta/a/imagen10.jpg');

-- Insertar publicaciones
-- Publicaciones para usuario1
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Título de la publicación 1 para usuario1', 'Tecnologías de la publicación 1 para usuario1', 'Subtítulo de la publicación 1 para usuario1', 'Descripción de la publicación 1 para usuario1', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161569/HackUDC/jmg8qrhhoqsdntilohdr.webp', 1),
('Título de la publicación 2 para usuario1', 'Tecnologías de la publicación 2 para usuario1', 'Subtítulo de la publicación 2 para usuario1', 'Descripción de la publicación 2 para usuario1', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161501/HackUDC/oevmwto4stkjez7d1fqp.png', 1);

-- Publicaciones para usuario2
-- Publicaciones para usuario2
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Título de la publicación 1 para usuario2', 'Tecnologías de la publicación 1 para usuario2', 'Subtítulo de la publicación 1 para usuario2', 'Descripción de la publicación 1 para usuario2', 'https://beige-jeanelle-25.tiiny.site/', 2),
('Título de la publicación 2 para usuario2', 'Tecnologías de la publicación 2 para usuario2', 'Subtítulo de la publicación 2 para usuario2', 'Descripción de la publicación 2 para usuario2', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161685/HackUDC/kh7nkvjxdk97zugeottu.gif', 2),
('Poema', 'Tecnologías del poema', 'Subtítulo del poema', 'A short poem', '', 2); -- Valor vacío para la columna media


-- Publicaciones para usuario3
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Título de la publicación 1 para usuario3', 'Tecnologías de la publicación 1 para usuario3', 'Subtítulo de la publicación 1 para usuario3', 'Descripción de la publicación 1 para usuario3', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161570/HackUDC/p0mtbtggmzcabj32jo5g.webp', 3),
('Título de la publicación 2 para usuario3', 'Tecnologías de la publicación 2 para usuario3', 'Subtítulo de la publicación 2 para usuario3', 'Descripción de la publicación 2 para usuario3', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/HackUDC/bxg0019qnfeft5zdtnjd', 3),
('O neno do entroido', 'Tecnologías del O neno do entroido', 'Subtítulo del O neno do entroido', 'O neno enxebre', 'https://res.cloudinary.com/dnc3btlfa/video/upload/v1708195665/HackUDC/wa1zkn9lbkhidlym48ze.mp4', 3);

-- Publicaciones para usuario4
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Título de la publicación 1 para usuario4', 'Tecnologías de la publicación 1 para usuario4', 'Subtítulo de la publicación 1 para usuario4', 'Descripción de la publicación 1 para usuario4', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/HackUDC/x18nt0rrvyzwb6rpl1hc',4),
('Título de la publicación 2 para usuario4', 'Tecnologías de la publicación 2 para usuario4', 'Subtítulo de la publicación 2 para usuario4', 'Descripción de la publicación 2 para usuario4', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161569/HackUDC/gdsoi2nkgneaxguu5c2e.webp', 4);

-- Publicaciones para usuario5
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Título de la publicación 1 para usuario5', 'Tecnologías de la publicación 1 para usuario5', 'Subtítulo de la publicación 1 para usuario5', 'Descripción de la publicación 1 para usuario5', 'https://www.youtube.com/embed/LitHV3Q-rSI?si=84IG0j36Ymr6luWW', 5),
('Título de la publicación 2 para usuario5', 'Tecnologías de la publicación 2 para usuario5', 'Subtítulo de la publicación 2 para usuario5', 'Descripción de la publicación 2 para usuario5', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161569/HackUDC/qcmsrn5hekttdrqak8sv.webp', 5),
('Página web favorita de Mónica', 'Tecnologías de la página web favorita de Mónica', 'Subtítulo de la página web favorita de Mónica', 'I Really like this website is so amazing, so artistic, what do u think Monica?', 'https://www.middleplane.com/', 5);
