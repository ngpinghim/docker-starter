# Keeping image size lean
During the image building process, you may have to use a couple of compilers. However, they are not useful any more when you are running the result image - so you may want to exclude them when you publish the image.

In this example, we want to exclude `gcc` in the result image.

## The `Dockerfile`
The `Dockerfile` is divided into 2 stages - the `builder` part from line 1 to 6 and the final part from line 8 to 11.

The `builder` part copies the source file - `main.c` to the image, installs `gcc` and runs `gcc` to compile the file to produce the binary `out`.

The final part copies the binary `out` created in the `builder` part to create the result image.

## Building the image
Run `docker build -f 04_Dockerfile -t 04_reducing_image_size .` to build the image.

## Running the image
Run `docker run 04_reducing_image_size` to run the image. You can see the binary `out` is run on the result image.

You can verify `gcc` does not exist on the image by modifying the `C` file to add `fork()` and `exec*()` to run `which gcc`. You will get an error with the similar description below -

```
which: no gcc in (<paths>)
```

This indicates the compiler `gcc` does not exist in the final image.
