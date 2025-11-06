#  Stage 1: Build 
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

#  Stage 2: run 

FROM node:20
WORKDIR /app

COPY --from=build /app ./

EXPOSE 5000

CMD ["sh", "-c", "npm run start"]
