FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html
COPY src/assets/images /usr/share/nginx/html/src/assets/images
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]