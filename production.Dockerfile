FROM node:10.15.3-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run", "build" ]

FROM node:10.15.3-alpine 
WORKDIR /app
COPY --from=build /app .
CMD [ "npm", "run", "develop" ] 