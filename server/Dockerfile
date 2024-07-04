FROM clearlinux

EXPOSE 5000 5432

RUN swupd bundle-add nodejs-basic


COPY . /root/server/
WORKDIR /root/server/

RUN npm i

