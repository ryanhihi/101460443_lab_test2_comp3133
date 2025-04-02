#Step to build the docker container
# docker build -t 101460443-lab-test2-comp3133 .


# Use official Node.js image to build the Angular app
FROM node:18 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the entire project
COPY . .

# Build the Angular project
RUN ng build --configuration=production

# Use Nginx to serve the Angular app
FROM nginx:alpine

# Copy the build output to Nginx HTML directory
COPY --from=build /app/dist/studentid-lab-test2-comp3133 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
