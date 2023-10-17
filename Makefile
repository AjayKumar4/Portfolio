SHELL :=/bin/bash

export PROJECT := portfolio
export VERSION := 2.0.0
export IMAGE_NAME := $(DOCKER_USERNAME)/$(PROJECT)
CONTAINER_RUNTIME := $(shell command -v podman 2>/dev/null && echo podman || echo docker)

.PHONY: build clean login push release
.DEFAULT_GOAL := release

login: 
	$(CONTAINER_RUNTIME) login -u $(DOCKER_USERNAME) -p $(DOCKER_PASSWORD) 

build:
	$(CONTAINER_RUNTIME) build -t ${IMAGE_NAME}:$(VERSION) .
	$(CONTAINER_RUNTIME) tag ${IMAGE_NAME}:$(VERSION) ${IMAGE_NAME}:latest

push:
	$(CONTAINER_RUNTIME) push ${IMAGE_NAME}:$(VERSION)
	$(CONTAINER_RUNTIME) push ${IMAGE_NAME}:latest

clean:
	$(CONTAINER_RUNTIME) rmi ${IMAGE_NAME}:$(VERSION) || true
	$(CONTAINER_RUNTIME) rmi ${IMAGE_NAME}:latest || true

release: clean login build push