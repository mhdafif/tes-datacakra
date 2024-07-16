# Use the official Node.js runtime as the base image
FROM node:20 as build

RUN npm i -g pnpm

# Set the working directory in the container
WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile --prod=false

# Copy the entire application code to the container
COPY . .

# Build the React app for production
RUN pnpm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]