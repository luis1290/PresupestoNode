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

# Ejecuta las migraciones al construir la imagen del contenedor /  docker exec -it presupuesto-db-1 psql -U postgres -d presupuesto

# RUN npm run docker-start

# Exponer el puerto en el que la aplicación va a correr  SELECT * FROM Users;   psql -U postgres -d presupuesto-docker
EXPOSE 4500


# sequelize-auto -h <db> -d <presupuesto> -u <presupuesto-db-1> -x <1234> -e postgres -o "./models"

# npx sequelize-auto -h db -d presupuesto -u postgres -x 1234 -e postgres -o "./models"  docker exec -it 

# sequelize migration:generate --name add-createdAt-updatedAt-income  /npx sequelize-cli db:migrate

# npx sequelize-auto -o "./src/models" -d presupuesto -h db -u postgres -p 5432 -x 1234 -e postgres -v


# sequelize migration:generate --name add-createdAt-updatedAt-spent  / psql -U postgres -d presupuesto -h db -p 5432

# Definir el comando para correr la aplicación  docker run -d -p 4000:4000 --name presupuesto-container presupuesto-api
# npx sequelize-cli db:migrate --to 20240616163655-create-income.js docker cp presupuesto-api-1:/usr/src/app/.env .
CMD ["npm", "start"]