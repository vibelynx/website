FROM oven/bun:latest AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS installer
RUN mkdir -p /temp
COPY package.json bun.lock /temp/
RUN cd /temp && bun install

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS builder
COPY --from=installer /temp/node_modules node_modules
COPY . .
RUN bun run vite build

# copy build and node_modules into final image
FROM base AS release
COPY --from=builder /usr/src/app/build .
COPY --from=builder /usr/src/app/node_modules node_modules

# run the app
USER bun
EXPOSE 3000
ENTRYPOINT [ "bun", "index.js" ]
