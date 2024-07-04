FROM clearlinux

EXPOSE 3000 5000

RUN swupd bundle-add nodejs-basic

COPY . /root/client/
WORKDIR /root/client/

RUN npm i
RUN npm install -g serve
RUN npm run build



