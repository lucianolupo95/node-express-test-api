FROM node:20-alpine

# Directorio de trabajo dentro del container
WORKDIR /app

# Dependencias
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Código
COPY app ./app

# Puerto interno del servicio
EXPOSE 3000

# Comando de arranque
CMD ["npm", "start"]
