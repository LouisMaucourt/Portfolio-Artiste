FROM imbios/bun-node:1.3.11-20.20.1-debian
WORKDIR /app

COPY front/package.json front/bun.lock ./
RUN bun install --frozen-lockfile

COPY front/ .
RUN node node_modules/.bin/next build

EXPOSE 3000
CMD ["bun", "run", "start"]