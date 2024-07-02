FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

RUN yarn build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run your application
CMD ["yarn", "preview"]