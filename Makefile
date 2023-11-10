SHELL :=/bin/bash

export PROJECT := portfolio
export VERSION := 2.0.0
export IMAGE_NAME := $(DOCKER_USERNAME)/$(PROJECT)
CONTAINER_RUNTIME := $(shell command -v podman 2>/dev/null)

.PHONY: build podman-build podman-clean podman-login podman-push release
.DEFAULT_GOAL := release

build:
	yarn
	yarn build

podman-login: podman-clean
	$(CONTAINER_RUNTIME) login docker.io -u $(DOCKER_USERNAME) -p $(DOCKER_PASSWORD) 

podman-build: podman-login build
	$(CONTAINER_RUNTIME) build --all-platforms -t ${IMAGE_NAME}:$(VERSION) .
	$(CONTAINER_RUNTIME) tag ${IMAGE_NAME}:$(VERSION) ${IMAGE_NAME}:latest

podman-push: podman-build
	$(CONTAINER_RUNTIME) push ${IMAGE_NAME}:$(VERSION)
	$(CONTAINER_RUNTIME) push ${IMAGE_NAME}:latest

podman-clean:
	$(CONTAINER_RUNTIME) rmi ${IMAGE_NAME}:$(VERSION) || true
	$(CONTAINER_RUNTIME) rmi ${IMAGE_NAME}:latest || true

release: podman-clean podman-login podman-build podman-push