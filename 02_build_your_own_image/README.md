# Build an image using `Dockerfile`
Run `docker build -f 02_Dockerfile -t 02_my_first_image:latest .` to start building the a sample node app from `Dockerfile`.

## `-t name[:tag]`
The optional `-t` flag specifies the name and the tag of your image. If this flag is not specified, you image output will not be given a name or a tag (i.e. `<none>` will be given).

## The `Dockerfile`
### Line 1
`FROM node:13.10.1-stretch-slim1`

Uses `node:13.10.1-stretch-slim1` as the base image

### Line 2
`WORKDIR /var/02_build_your_own_image`

Changes to `/var/02_build_your_own_image` in the image, sets this directory to the current working directory

### Line 3
`COPY ./src/ .`

`Copies` everything in `./src/` on the host to the current working directory in the image.

### Line 4
`RUN npm i`

`Runs` the command you specified in the image

### Line 5
`CMD node index`

Executes the command after you have built the image in the container. Each `Dockerfile` can contain at most 1 `CMD` instruction.

## `.dockerignore`

Like `.gitignore`, by placing a `.dockerignore` file in the context, Docker ignores all files and directories specified in this file. In this case, we have specified `node_modules` in the `.dockerignore` file to avoid this folder being copied to the image.

## To run the image
Run `docker run -p 3000:3001 --name 02_my_first_container 02_my_first_image:latest` to start the container of this image.

The `-p` flag specifies the port mapping between the host and the Docker container. `-p 3000:3001` stands for creating a listener on port 3000 on the host and 3001 on the Docker container.

To test it out, on the host - you can run `curl localhost:3000`;

while within the Docker world - you can run `curl localhost:3001`.

### Note on port mapping
Ports under `1024` are priviledged ports - you will need to `sudo` to bind ports. This is an operating system's restriction, not Docker's.

#### Example on binding priviledged ports
For example, you are working on `nginx` and need to listen on port 80, you should run `sudo docker run -p 80:80 --name nginx nginx:latest`
