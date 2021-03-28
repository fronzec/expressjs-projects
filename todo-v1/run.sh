#!/bin/bash


if npm run test; then
  cd devEnv/ || exit
  echo "Building image and running"
  if docker-compose build; then
      echo "UP AND RUNNING CONTAINERS"
      docker-compose up -d;
      docker-compose ps;
      echo -n "Do you want all container logs? (By default only will show app container logs) [y/n] "
      read option -r
      if [[ "$option" == "y" ]]; then
          echo "SHOWING ALL CONTAINERS LOGS";
          docker-compose logs -f;
      else
          echo "SHOWING ONLY APP CONTAINER LOGS";
          docker-compose logs -f app;
      fi
  else
      echo "THERE WAS A ERROR TRYING TO BUILD DOCKER IMAGES"
  fi
else
  echo "Test failing"
fi
