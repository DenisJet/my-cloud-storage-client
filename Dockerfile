FROM node:21-alpine
WORKDIR /my-cloud-storage-client
ADD package.json package.json
RUN npm install --legacy-peer-deps
ADD . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000