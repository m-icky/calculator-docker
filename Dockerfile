# Step 1: Build the app using Node
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve it with Nginx
FROM nginx:stable-alpine

# Copy built files from previous step
COPY --from=build /app/dist /usr/share/nginx/html

# Custom Nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
