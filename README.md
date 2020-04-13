# Introduction to Docker
This repo provides 5 common examples of software running on Docker.

## Installation
### Docker Engine
To install Docker, visit https://docs.docker.com/get-docker/.
#### Docker on Windows
If you are not running Windows 10 Pro, Enterprise or Education, or Hyper-V is not supported on your platform, install [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) instead.

### Docker Compose
Apart from Docker Engine, you will also need to install [Docker Compose](https://docs.docker.com/compose/install/) to run example 5.

## Running the examples
Read the README of each folder for instructions of running the examples.

## Tested on Linux
The examples in this repo have been tested on [Tiny Core Linux](http://tinycorelinux.net/). For other platforms, like Windows, you will have to change the path of the volume in example 3 to make the example work.

## Resetting the environment
You are suggested to modify the codes of all examples to try out Docker. If anything goes wrong, below are the handy commands to reset the environment.

```
# stops and removes all containers
docker rm -f $(docker ps -aq)

# removes all images
docker rmi -f $(docker images -aq)
```

You can be assured that all your commands in the `Dockerfile`s and `docker-compose` files, and all files in the volumes will not be overwritten.

## Suggestions
Please raise pull requests to the master branch.

## License
Please see the LICENSE file.
