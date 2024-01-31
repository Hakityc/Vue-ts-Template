# frontend build stage
FROM node:18-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
COPY .npmrc ./
RUN  npm ci
COPY . .
RUN npm run build
# ARG mode=development

#RUN npm run build -- --mode $mode


# frontend production stage
FROM nginx:stable-alpine AS frontend

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
