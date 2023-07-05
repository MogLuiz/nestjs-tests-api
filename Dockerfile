FROM node:19-slim

# RUN apt install bash

WORKDIR /home/node/app

# USER node

CMD ["tail", "-f", "/dev/null"]