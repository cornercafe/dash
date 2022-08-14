# build environment
FROM node:latest as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install -frozen-lockfile
COPY . /usr/src/app
RUN pnpm build

# production environment
FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]