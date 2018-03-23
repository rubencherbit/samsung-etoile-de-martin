#!/bin/bash
PORT=8089

docker run \
    --name locust \
    -v ${PWD}/locustfile.py:/locust/locustfile.py \
    -p ${PORT}:8089 \
    christianbladescb/locustio:latest