# Etapa 1: Construcción de la aplicación
FROM node:18 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Verificar que el directorio build se haya generado
RUN ls -la /app/dist

# Etapa 2: Servir la aplicación utilizando Nginx
# FROM nginx:alpine

# Copia los archivos compilados desde la etapa anterior
# COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 5173

CMD [ "npm", "run", "dev"]

# Comando por defecto para ejecutar Nginx
# CMD ["nginx", "-g", "daemon off;"]
