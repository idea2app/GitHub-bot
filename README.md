# my-first-app

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

## Setup

```sh
# Install dependencies
pnpm i

# Run the bot
pnpm run dev
```

## Docker

```sh
# 1. Build container
docker build -t my-first-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> my-first-app
```

## Contributing

If you have suggestions for how my-first-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE) © 2022 stevending1st
