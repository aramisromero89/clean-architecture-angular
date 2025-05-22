# Stage 1: Build the Angular app
FROM node:18 AS build

RUN apt-get update && apt-get install -y openjdk-17-jdk && rm -rf /var/lib/apt/lists/*
ARG API_URL

ENV API_URL=$API_URL

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Angular app in production mode
RUN npm run build -- --configuration production
RUN ls -al /app/dist && ls -al /app/dist/clean-architecture-angular

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist/clean-architecture-angular/browser /usr/share/nginx/html
RUN ls -al /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]