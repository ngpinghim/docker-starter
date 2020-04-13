# Build and run images with a `docker-compose` file
Run `docker-compose -f 05-docker-compose.yml up` to build and run the images.

## The `docker-compose` file
The file declares there are 2 services - `receiver` and `sender`. The images are built within their `src/` directories respectively.

### The `receiver` service
Port `3000` is declared to be `expose`d within this Docker network to allow containers within the same network to communicate with this container. However, the `expose` key is optional and is for documentation only - but it is recommended to keep this in the `docker-compose` file for easy reference.

### The `sender` service
The `depends_on` key in the file declares that the `sender` service must start after the `receiver` is ready. This key is particularly useful when you want to connect to databases and save some connection retrying logic in your codes.

## The results
You will see `sender` sends a message to the `receiver` every second and their requests and responses are printed in the terminal.

To stop the app, press `Ctrl-C`.
