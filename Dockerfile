# Use Node Alpine for lightweight image
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# Expose the port the React dev server runs on
EXPOSE 3000

# Start the React app in dev mode with hot reload
CMD ["npm", "start"]
