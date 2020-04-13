# Run an image
To start with, we will be running a sample image `hello-world`, which is available on Docker Hub.

`docker run --name 01_hello_world hello-world`

## `--name 01_hello_world`
The `--name` is an optional flag, which specifies the container name of this running image. Enter the container enter of your wish after this flag. In this example, the container will be named as `01_hello_world`.

## `hello-world[:tag]`
At the very end of this command, you enter the name of the image. Having a tag of an image is optional. If tag is not specified, the `latest` image will be run.
