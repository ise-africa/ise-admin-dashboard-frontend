FROM node:18.19.1-alpine
RUN mkdir -p /apps/staging/ise-admin-dashboard
WORKDIR /apps/staging/ise-admin-dashboard
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
