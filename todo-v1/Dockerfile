ARG PORT=3000

FROM node:14-alpine AS node

# Builder stage
FROM node AS builder

# Set node environment to production
ENV NODE_ENV production

#Use /app as the CWD
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install the libraries as user node
RUN npm ci --only=production

# Copy the rest of the code
COPY ./build .

# Open desired port
EXPOSE ${PORT}

# Run development server
ENTRYPOINT ["npm", "start"]



