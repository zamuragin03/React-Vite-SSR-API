FROM node:20.11.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN yarn run build
CMD ["npm", "run", "preview"]