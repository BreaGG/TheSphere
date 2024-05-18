-- Insertar usuarios
INSERT INTO users (username, password, email, bio, profilePic, headerPic, country) VALUES
('Alex Suarez', 'contraseña1', 'usuario1@example.com', '¡Hola! Soy Alex Suarez, un apasionado Diseñador con un amor profundo por la creatividad y la tecnología. Me considero un eterno soñador que se dedica a convertir ideas innovadoras en experiencias digitales asombrosas. Mi enfoque se basa en fusionar diseño y funcionalidad para crear soluciones impactantes y atractivas.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/ycdimolbpuauqkatktdr', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/hkdmcot1wtsoxpldknfy', 'España'),
('Marco Rossi', 'contraseña2', 'usuario2@example.com', 'Biografía del usuario 2.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/etdloictcibumnn5zsso', 'ruta/a/imagen4.jpg', 'México'),
('Javier Galiñanes', 'contraseña3', 'usuario3@example.com', 'Biografía del usuario 3.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/iwcu1x3lp9xh4yrnj5bt', 'ruta/a/imagen6.jpg', 'Argentina'),
('Teo Gallego', 'contraseña4', 'usuario4@example.com', 'Hola chavales soy Teo.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/jowj9hsqy0ji7bjilbuz', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/fbdxi8g5duz63egpv9c0', 'Francia'),
('Lola Bermudez', 'contraseña5', 'usuario5@example.com', 'Biografía del usuario 5.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/lrxuaopivyguobr8tdmn', 'ruta/a/imagen10.jpg', 'Chile');


-- Insertar publicaciones
-- Publicaciones para usuario1
INSERT INTO posts (title, technologies, subTitle, description, subTitle2, description2, media, user_id) VALUES
('Canary Islands paradise project', 'Adobe Photoshop - Adobe Ilustrator', 'Exploring Natures Canvas: Capturing the Essence of Canary Islands', 'In the heart of the Atlantic Ocean lies a hidden gem, the Canary Islands, a paradise of unparalleled beauty waiting to be explored through the lens of a camera. Our project, "Canary Islands Paradise," embarks on a photographic journey to showcase the captivating landscapes, diverse ecosystems, and vibrant culture of this enchanting archipelago. From the dramatic cliffs of Tenerife to the golden sands of Gran Canaria, our lenses capture the essence of this unique paradise. Through our images, we aim to transport viewers into a world where azure waters meet lush greenery, where ancient traditions blend seamlessly with modern life, and where every frame tells a story of the islands rich natural heritage.', 'Colors of Serenity: A Visual Ode to Canary Islands Paradise', 'In our photographic odyssey, Colors of Serenity, we delve into the chromatic wonders that define the Canary Islands unparalleled beauty. Each frame captures the interplay of hues that paint the skies during sunrise and sunset, the rich marine blues that surround the islands, and the vibrant flora that adorns the landscape. From the fiery reds of volcanic terrain to the soothing pastels of quaint coastal villages, our lenses unveil the poetic serenity of the Canary Islands. This project goes beyond mere visuals; it is an ode to the harmonious blend of colors that evoke a sense of peace and tranquility unique to this paradise. Through our photographs, we invite viewers to immerse themselves in the soothing palette of the Canary Islands and experience the serenity that nature so generously bestows upon this enchanting destination.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/muwpghrjwczznslolafu', 1);

-- Publicaciones para usuario2
-- Publicaciones para usuario2
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Accesible Ticket Website', 'Tecnologías de la publicación 1 para usuario2', 'Subtítulo de la publicación 1 para usuario2', 'Redesign an event ticketing website with a focus on accessibility and inclusivity. Prioritize user-friendly navigation, clear information presentation, and features that cater to individuals with diverse needs, ensuring a seamless experience for all users.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/cnaj3kkd8dhczjupsvaw', 2),
('Eco-friendly Habit Tracker App', 'Tecnologías de la publicación 2 para usuario2', 'Subtítulo de la publicación 2 para usuario2', 'Mobile app that encourages users to adopt eco-friendly habits. The app could include features like personalized challenges, progress tracking, and social sharing to promote a sustainable lifestyle', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/mpelykw9q5lrak6zkark', 2);


-- Publicaciones para usuario3
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('AI-Powered Personal Health Assistant', 'Tecnologías de la publicación 1 para usuario3', 'Subtítulo de la publicación 1 para usuario3', 'Health and wellness application that utilizes artificial intelligence to provide personalized health recommendations, track fitness goals, and offer real-time assistance for maintaining a healthy lifestyle', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/jb6tmuiakjaxfmchw127', 3),
('Branding and Packaging for Sustainable Products', 'Tecnologías de la publicación 2 para usuario3', 'Subtítulo de la publicación 2 para usuario3', 'Create a branding and packaging concept for a line of eco-friendly products. Emphasize sustainable materials and design elements that convey the brands commitment to environmental responsibility', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/qoon2getrstq0hdpk0vq', 3),
('Immersive Vr Art Gallery', 'Tecnologías del O neno do entroido', 'Subtítulo del O neno do entroido', 'An idea of an immersive virtual reality experience showcasing a collection of artworks from various artists. Users can explore the gallery, interact with the art pieces, and even step inside the paintings or sculptures. This project merges technology and art, providing a unique and interactive way for art enthusiasts to experience and appreciate different artistic creations.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/okug8esjeurvx2ool0bg', 3);

-- Publicaciones para usuario4
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Minimalist Home Automation Interface', 'Tecnologías de la publicación 1 para usuario4', 'Subtítulo de la publicación 1 para usuario4', 'Sleek and user-friendly interface for a home automation system, focusing on simplicity and intuitive controls. The goal is to create a visually appealing and accessible experience for users managing smart home devices', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/f18c5g1iehxghsmskehx',4),
('Comprehensive cryptocurrency portfolio', 'Tecnologías de la publicación 2 para usuario4', 'Subtítulo de la publicación 2 para usuario4', 'Comprehensive cryptocurrency portfolio tracker that allows users to manage their digital assets, track market trends, and receive real-time notifications. The platform can support multiple cryptocurrencies and exchanges', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/sb2pfgk9nkkqlbkqtrjf', 4);

-- Publicaciones para usuario5
INSERT INTO posts (title, technologies, subTitle, description, media, user_id) VALUES
('Chatas Ibiza', 'Tecnologías de la publicación 1 para usuario5', 'Subtítulo de la publicación 1 para usuario5', 'Unique jewelry brand specializing in earrings and necklaces inspired by the beauty of Ibiza. The website design aims to showcase the artisanal craftsmanship of each piece, providing users with an immersive and delightful shopping experience.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/q9bmdf44kickt4vi6qws', 5),
('Luminous Installation', 'Tecnologías de la publicación 2 para usuario5', 'Subtítulo de la publicación 2 para usuario5', 'We will develop a generative application using complex algorithms to create dreamlike and surreal landscapes in real-time. Users can interact with the application to explore imaginary worlds, inspiring creativity and providing a visually unique and stimulating experience.', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/oujghbq4sriehzdwr424', 5),
('Virtual FashionWeek', 'Tecnologías de la página web favorita de Mónica', 'Subtítulo de la página web favorita de Mónica', 'Design a virtual reality experience for a fashion show, allowing users to attend and explore the latest collections from the comfort of their homes. Consider interactive elements and immersive visuals to enhance the overall experience', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/TheSphere/fvraqsm7fyzhihvlt8xl', 5);
