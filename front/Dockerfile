FROM oven/bun:1.2.8
WORKDIR /app
COPY front/package.json front/bun.lock ./
RUN bun install --frozen-lockfile
COPY front/ .
RUN bun run build
EXPOSE 3000
CMD ["bun", "run", "start"]