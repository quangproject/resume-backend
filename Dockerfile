# Use official Bun image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb first to leverage Docker cache
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy the rest of the application files
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the Bun app
CMD ["bun", "run", "start"]
