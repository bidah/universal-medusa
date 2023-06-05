---
sidebar_position: 1
slug: /
---

# Universal ecommerce development

Build cross platforms ecom apps that get you the best of web and native mobile using Next.js and Expo.
You get a development setup with shared tailwind styles, screens and components,unified navigation plus all the medusa.js headless modules at your disposal.

## Motivation
When developing robust ecommerce your app product tend to ship slower and slower when it grows in functionality and team size. That's always the case on a thriving project. With that in mind Universal medusa empowers what Medusa.js already gives you. More dev tooling to power up your ecom development with easy and sacability in mind.



## Getting Started

Get started by running the following to create a new project with a base monorepo structure ready to go.

```bash
npx create-universal-medusa-app my-app
```


You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

## Start projects (mobile, web and Medusa.js backend)

:::note
`yarn install` aready ran when you created the project
:::

Run Expo client
```bash
# first time only you need to create your dev client
yarn eas build --profile development-simulator --platform ios

# then start your dev client
yarn native
```

Run Next.js web app

```bash
yarn web
```

Run the medusa backend

:::note
You need to have a local postgres database already created and running
:::
```bash
# first time only you need to seed db
yarn medusa:seed

# then start the backend
yarn medusa
```

Run the medusa backend

```bash
yarn medusa
```

