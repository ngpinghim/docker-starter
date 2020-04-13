# Sharing files between the host and the container
Run `docker build -f 03_Dockerfile -t 03_sharing_files .` to build the app.

## To run the image
Run `docker run -v /docker_shared/03_sharing_files:/var/03_sharing_files 03_sharing_files` to start the container of this image.

The `-v` flag maps the directory `/docker_shared/03_sharing_files` on the host to `/var/03_sharing_files` inside the container.

## Creating an persistent storage for contents inside the container
If you try `run`ning an image again after its container is stopped, you won't find the previous changes of the old container presented inside the newly created container - as a new container is created by each `docker run` command. To make file sharing easier, one of the solutions is to create a volume to allow directory mappings between the host and the container. 

## The app
Every time you start the container, the app creates a text file of the current time, and after the container quits. You can run the image multiple times to create multiple container and see the older text files are still kept.
