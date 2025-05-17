# FROM node:20-alpine as build

# RUN npm install -g pnpm
# RUN npm install -g serve

# WORKDIR /app

# COPY package.json ./
# COPY pnpm-lock.yaml ./

# RUN pnpm install

# COPY . .

# RUN pnpm run build

# EXPOSE 3000

# CMD [ "serve", "-s", "dist" ]
