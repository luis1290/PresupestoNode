# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación desde tu máquina local al contenedor
COPY . .

# Instala las dependencias
RUN npm install 




# Expone el puerto en el que funciona tu aplicación
EXPOSE 4000



# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "run", "dev"]
