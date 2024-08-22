NAME			= frontend-server
RUNNING			= running-frontend-server

DOCKERFILE		= Dockerfile
DOCKERFILE_DEV	= Dockerfile.dev


# Docker ID
CONTAINER		= $(shell docker container ls --quiet)
IMAGE			= $(shell docker images --quiet ${NAME})
VOLUME			= $(shell docker volume ls --quiet)

all:
	docker build -t ${NAME} -f ${DOCKERFILE} .
	docker run -it --rm -p 3000:3000 --name ${RUNNING} ${NAME}

dev:
	docker build -t ${NAME} -f ${DOCKERFILE_DEV} .
	docker run -v ./app/src:/app/src -it --rm -p 3000:3000 --name ${RUNNING} ${NAME}

test_container:
	docker build -t ${NAME} -f ${DOCKERFILE_TEST} .
	docker run -it --rm --name ${RUNNING} ${NAME}

clean:
ifneq ($(strip ${CONTAINER}),)
	docker stop ${RUNNING}
endif

fclean: clean
ifneq ($(strip ${IMAGE}),)
	docker image rm -f ${IMAGE}
endif

re:
	make fclean
	make all

test:
	npm --prefix ./app install ./app
	npm --prefix ./app run build ./app
	npx --prefix ./app playwright test ./app

.PHONY: all clean fclean re
