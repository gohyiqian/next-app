# add the Node.js docker image
FROM node:18

# Create directory that runs the app on docker
WORKDIR /app
RUN ls -1
RUN pwd

# COPY package.json and package-lock.json files
COPY package.json package-lock.json ./
COPY package*.json ./

RUN npm install

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# Install package.json dependencies
RUN npm install

# COPY
COPY . .

# Generate prisma client
RUN npx prisma generate

# Run and expose the server on port 3000
EXPOSE 3000

# A command to start the server
CMD npm start