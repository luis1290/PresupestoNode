# Usar una imagen base oficial de Node.js
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Copiar el archivo .env al contenedor
COPY .env .env

# Exponer el puerto en el que la aplicación va a correr  SELECT * FROM Users;   psql -U postgres -d presupuesto-docker
EXPOSE 4500

# Definir el comando para correr la aplicación  docker run -d -p 4000:4000 --name presupuesto-container presupuesto-api
# npx sequelize-cli db:migrate --to 20240616163655-create-income.js
CMD ["npm", "start"]