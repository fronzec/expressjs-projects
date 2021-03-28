#!/bin/bash

echo "STOPPING"
cd devEnv/
if docker-compose stop; then
    echo "CONTAINERS STOPPED"
else
    echo "THERE WAS A ERROR TRYING TO STOP DOCKER CONTAINERS"
fi
