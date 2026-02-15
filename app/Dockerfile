# --------------------
# 1) Build/deps stage
# --------------------
FROM node:22-alpine AS deps
WORKDIR /app

# Patch OS packages (openssl etc.) and keep base current
RUN apk update && apk upgrade --no-cache

# Install prod deps only
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy app source
COPY src ./src

# --------------------
# 2) Runtime stage (NO npm)
# --------------------
FROM gcr.io/distroless/nodejs22-debian12:nonroot
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/src ./src

# Distroless entrypoint is "node"
CMD ["src/index.js"]




# FROM node:18-alpine

# WORKDIR /app

# COPY package.json package-lock.json* ./
# RUN npm install --omit=dev

# COPY src ./src
# COPY tests ./tests

# EXPOSE 8080
# ENV PORT=8080

# CMD ["npm", "start"]
