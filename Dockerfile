FROM node:16 as dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16 as builder
WORKDIR /app
ENV NEXT_MANUAL_SIG_HANDLE true
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build

FROM node:16 as runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_MANUAL_SIG_HANDLE true

# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["./node_modules/.bin/next", "start"]
