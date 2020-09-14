APP_NAME:= simple-webserver
DOCKER_HUB=perfecthospital
DOCKER_PASS=12345678912


build-docker: ## Build the container
	docker build   -t $(APP_NAME) .

publish:
	docker login --username $(DOCKER_HUB) --password $(DOCKER_PASS)
	docker tag $(APP_NAME) $(DOCKER_HUB)/$(APP_NAME):latest
	docker push $(DOCKER_HUB)/$(APP_NAME):latest

deploy-publish: build-docker publish

