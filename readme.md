# Universal Medusa ⚛️ Multi platform e-commerce development

Build cross platforms e-commerce apps with [Medusa.js](http://medusajs.com) that gets you the best of web and native mobile using [Next.js](http://nextjs.org) and [Expo](https://expo.dev).

You get a starter codebase with a complete e-commerce app that runs on both mobile and web. You get code reuse with shared screens, components, modules, providers, style system using [Nativewind](https://nativewind.dev), unified navigation with [Solito](https://solito.dev) and [Expo Router](https://expo.github.io/router/docs/) and much, much more.

📄 Docs: [https://dub.sh/universalmedusa](https://dub.sh/universalmedusa)

---

## Motivation
When developing robust ecommerce your app product tend to ship slower and slower when it grows in functionality and team size. That's always the case on a thriving project. With that in mind Universal medusa empowers what Medusa.js already gives you. More dev tooling to power up your ecom development with easy and sacability in mind.

## Getting Started
Get started by running the following to create a new project with a starter kit that consists of a:
- base monorepo structure ready to go.
- base medusa frontend starter (port of medusa.js next.js starter)
- base medusa backend starter

```bash
npx create-universal-medusa-app my-app
```

ℹ️ The starter is a port of Medusa.js Next.js starter. So you get all the same features out of the box.
You get a Expo, Next and default Medusa backend in a monorepo

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

## Start projects (mobile, web and Medusa.js backend)

ℹ️ `yarn install` already ran with the `create-universal-medusa-app` command

### Run Expo client

#### Install the latest EAS CLI
EAS CLI is the command-line app that you will use to interact with EAS services from your terminal. To install it, run the command:

```bash
npm install -g eas-cli
```

#### Login to your expo account
```bash
eas login
```

#### Configure project for eas builds
Create your dev client to be run on your simulator

ℹ️ You need to rerun build whenever you add native dependencies to your `expo` project

```bash
eas build --profile development-simulator --platform ios
```

then start your dev client
```bash
yarn native
```

-----

### Run Next.js web app

```bash
yarn web
```

### Run the medusa backend


ℹ️ If you have PostgreSQL installed on your machine, the database for Medusa backend is already created and configured for you when running `npx create-universal-medusa-app` 

```bash
# First time only. You need to seed db
yarn medusa:seed

# then start the backend
yarn medusa
```



