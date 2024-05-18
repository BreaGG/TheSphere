-- Insertar usuarios
INSERT INTO users (username, password, email, profilePic, headerPic) VALUES
('Alex Suarez', 'contraseña1', 'usuario1@example.com', 'ruta/a/imagen1.jpg', 'ruta/a/imagen2.jpg'),
('usuario2', 'contraseña2', 'usuario2@example.com', 'ruta/a/imagen3.jpg', 'ruta/a/imagen4.jpg'),
('usuario3', 'contraseña3', 'usuario3@example.com', 'ruta/a/imagen5.jpg', 'ruta/a/imagen6.jpg'),
('usuario4', 'contraseña4', 'usuario4@example.com', 'ruta/a/imagen7.jpg', 'ruta/a/imagen8.jpg'),
('usuario5', 'contraseña5', 'usuario5@example.com', 'ruta/a/imagen9.jpg', 'ruta/a/imagen10.jpg');

-- Insertar publicaciones
-- Publicaciones para usuario1
INSERT INTO posts (title, technologies, subTitle, description, subTitle2, description2, media, user_id) VALUES
('Canary Islands paradise project', 'Adobe Photoshop - Adobe Ilustrator', 'Exploring Natures Canvas: Capturing the Essence of Canary Islands', 'In the heart of the Atlantic Ocean lies a hidden gem, the Canary Islands, a paradise of unparalleled beauty waiting to be explored through the lens of a camera. Our project, "Canary Islands Paradise," embarks on a photographic journey to showcase the captivating landscapes, diverse ecosystems, and vibrant culture of this enchanting archipelago. From the dramatic cliffs of Tenerife to the golden sands of Gran Canaria, our lenses capture the essence of this unique paradise. Through our images, we aim to transport viewers into a world where azure waters meet lush greenery, where ancient traditions blend seamlessly with modern life, and where every frame tells a story of the islands rich natural heritage.', 'Colors of Serenity: A Visual Ode to Canary Islands Paradise', 'In our photographic odyssey, Colors of Serenity, we delve into the chromatic wonders that define the Canary Islands unparalleled beauty. Each frame captures the interplay of hues that paint the skies during sunrise and sunset, the rich marine blues that surround the islands, and the vibrant flora that adorns the landscape. From the fiery reds of volcanic terrain to the soothing pastels of quaint coastal villages, our lenses unveil the poetic serenity of the Canary Islands. This project goes beyond mere visuals; it is an ode to the harmonious blend of colors that evoke a sense of peace and tranquility unique to this paradise. Through our photographs, we invite viewers to immerse themselves in the soothing palette of the Canary Islands and experience the serenity that nature so generously bestows upon this enchanting destination.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161569/HackUDC/jmg8qrhhoqsdntilohdr.webp', 1);

-- Publicaciones para usuario2
-- Publicaciones para usuario2
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Título de la publicación 1 para usuario2', 'Tecnologías de la publicación 1 para usuario2', 'Subtítulo de la publicación 1 para usuario2', 'Descripción de la publicación 1 para usuario2', 'https://beige-jeanelle-25.tiiny.site/', 2),
('Título de la publicación 2 para usuario2', 'Tecnologías de la publicación 2 para usuario2', 'Subtítulo de la publicación 2 para usuario2', 'Descripción de la publicación 2 para usuario2', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161685/HackUDC/kh7nkvjxdk97zugeottu.gif', 2);


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
