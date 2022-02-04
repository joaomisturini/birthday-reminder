FROM node:13.3

RUN apt-get update && apt-get install -y --no-install-recommends \
    git openssh-client

RUN npm install -g eslint

WORKDIR /var/www

RUN apt-get autoremove && apt-get clean && rm -rf /var/lib/apt/lists/*
