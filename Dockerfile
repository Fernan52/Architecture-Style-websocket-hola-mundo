# Usamos una imagen oficial de Node.js como base
FROM node:16

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos el package.json y package-lock.json
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto de los archivos del proyecto
COPY . .

# Exponemos el puerto 8080 para la conexión WebSocket
EXPOSE 8080

# Comando para iniciar el servidor WebSocket
CMD ["node", "server.js"]
