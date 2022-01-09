#!/bin/bash

function printline {
echo "$1";
}

function runScript {
docker exec -it smf-nodejs "$@";
}

# Check if the .env file exists, if not try to copy the .env.example to .env
if ! [ -f ".env" ];
then
ENVIRONMENT_FILE=".env.example";
printline "==[ Copying $ENVIRONMENT_FILE to .env"
cp $ENVIRONMENT_FILE .env
local_uid=$(id -u);
local_gid=$(id -g);

echo "" >> ".env"
echo "DOCKER_UID=$local_uid" >> ".env"
echo "DOCKER_GID=$local_gid" >> ".env"
fi

echo "==[ DOCKER INIT ]==";
docker-compose up -d --remove-orphans

echo "==[ YARN INSTALL ]==";
runScript yarn