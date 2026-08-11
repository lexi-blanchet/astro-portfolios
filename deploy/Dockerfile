ARG NODE_VERSION=node:lts
ARG ASTRO_PROJECT

FROM ${NODE_VERSION} AS base
WORKDIR /app
ARG ASTRO_PROJECT

RUN echo "Building $ASTRO_PROJECT on $NODE_VERSION"

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY projects/${ASTRO_PROJECT}/package.json  projects/${ASTRO_PROJECT}/package-lock.json ./

FROM base AS prod-deps
RUN npm install --omit=dev

FROM base AS build-deps
RUN npm install

FROM build-deps AS build
ARG ASTRO_PROJECT
COPY projects/${ASTRO_PROJECT}/ .
RUN npm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "/app/dist/server/entry.mjs"]