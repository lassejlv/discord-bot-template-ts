FROM node:latest

# Create app directory
WORKDIR /app

# Step 3: Install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Build application
COPY . .
RUN npm run build

# Step 5: Start command
CMD ["npm", "start"]