# SOL Balance

This lamda function returns the SOL { balance : balance } OR { error : error } of a Solana account (not a token account), when it receives a GET request. E.G. endpoint/?address=xxxx

e.g. https://6iuvnc8op5.execute-api.us-east-1.amazonaws.com/production/balance?address=xxxx

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

-   Run `npm i` to install the project dependencies
-   Run `serverless deploy` to deploy this stack to AWS

### Using Yarn

-   Run `yarn` to install the project dependencies
-   Run `serverless deploy` to deploy this stack to AWS

### Locally

In order to test locally, run the following command: `serverless offline start`
