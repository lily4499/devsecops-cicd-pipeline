FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY src ./src
COPY tests ./tests

EXPOSE 8080
ENV PORT=8080

CMD ["npm", "start"]
