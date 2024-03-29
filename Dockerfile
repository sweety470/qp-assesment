FROM node:alpine 
WORKDIR /usr/src/index 
COPY ./package.json ./
COPY ./package-lock.json ./  
COPY ./tsconfig.json ./ 
RUN npm install 
COPY ./src ./ src /usr/src/  
COPY ./config/config.ts ./ 
CMD ["npm", "run", "dev"] 