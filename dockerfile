FROM node:18.17.0

# Install necessary system dependencies
RUN apt-get update && apt-get install -y libc6

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
CMD ["npm", "run", "build"]
