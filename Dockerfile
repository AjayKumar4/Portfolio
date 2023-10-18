# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# production stage
FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/src/assets/images /usr/share/nginx/html/src/assets/images
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]