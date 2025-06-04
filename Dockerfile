FROM node:22 AS build
WORKDIR /app
COPY . .
RUN npm ci && npx ng build

FROM node:22-alpine
WORKDIR /app

COPY --from=build app/dist .

EXPOSE 3000

CMD ["node", "legal/server/server.mjs"]
