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

# Ejecuta las migraciones al construir la imagen del contenedor
# RUN npm run docker-start

# Exponer el puerto en el que la aplicación va a correr  SELECT * FROM Users;   psql -U postgres -d presupuesto-docker
EXPOSE 4500


# sequelize-auto -h <db> -d <presupuesto> -u <presupuesto-db-1> -x <1234> -e postgres -o "./models"

# sequelize-auto -h db -d presupuesto -u postgres -x 1234 -e postgres -o "./models"

# sequelize migration:generate --name add-createdAt-updatedAt-income
# sequelize migration:generate --name add-createdAt-updatedAt-spent

# Definir el comando para correr la aplicación  docker run -d -p 4000:4000 --name presupuesto-container presupuesto-api
# npx sequelize-cli db:migrate --to 20240616163655-create-income.js docker cp presupuesto-api-1:/usr/src/app/.env .
CMD ["npm", "start"]