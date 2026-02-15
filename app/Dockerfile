# Option A (recommended): Node 22 LTS on Alpine 3.21
FROM node:22-alpine3.21

# Option B: Node 24 LTS on Alpine 3.21
# FROM node:24-alpine3.21

WORKDIR /app

# Patch OS packages (openssl, etc.)
RUN apk update && apk upgrade --no-cache

# Install only prod deps (repeatable)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy app source only (tests should NOT ship in runtime image)
COPY src ./src

EXPOSE 8080
ENV PORT=8080

# (optional but good): run as non-root (node user exists in official image)
USER node

CMD ["npm", "start"]




# FROM node:18-alpine

# WORKDIR /app

# COPY package.json package-lock.json* ./
# RUN npm install --omit=dev

# COPY src ./src
# COPY tests ./tests

# EXPOSE 8080
# ENV PORT=8080

# CMD ["npm", "start"]
