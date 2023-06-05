---
sidebar_position: 1
slug: /
---

# Universal ecommerce development

Build cross platforms ecom apps that get you the best of web and native mobile using Next.js and Expo. You get a development setup with shared tailwind styles, unified navigation,  shared screens and components with all the medusa.js headless modules at your disposal


## Getting Started

Get started by running the following to create a new project with a base monorepo structure ready to go.

```bash
npx create-universal-medusa-app my-app
```


You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

## Start projects (mobile, web and Medusa.js backend)

Install all monorepo dependencies on the root folder. *Subsequent commands also from root*
```bash
yarn install
```

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

