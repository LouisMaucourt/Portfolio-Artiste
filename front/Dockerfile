FROM imbios/bun-node:1.3.11-20.20.1-debian
WORKDIR /app

COPY front/ .
RUN bun install --frozen-lockfile && bun run build

EXPOSE 3000
CMD ["bun", "run", "start"]