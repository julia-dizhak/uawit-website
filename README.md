# UAWIT website

The website for the non-profit Organization Ukrainian Women in Tech in Stockholm.

It is built using Next.js + Sanity Studio. The Sanity studio is embedded in the project.

## Getting Started

This project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Set up the project locally

Before running a project, please always do `git pull`.

Clone the repository and install dependencies `npm install` and run the development server:

```bash
npm run dev or yarn dev
```

Run prettier

```bash
npm run format
```

Run eslint

```bash
npm run lint
npm run lint:fix
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<img width="1317" alt="localhost_3000" src="https://github.com/julia-dizhak/uawit-website/assets/1140769/79c4c2c2-6b50-438e-875e-002432b20a47">

You can edit the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

> **Note**
>
> This starter uses the `/pages` directory for Next.js routing.

You can collect a build 

```bash
npm run build
```

<img width="605" alt="uawit-website_—_julia_dizhak_Yuliias-MBP_—_-zsh_—_187×60_and_localhost_3000" src="https://github.com/julia-dizhak/uawit-website/assets/1140769/886bea60-9088-43f6-9f42-7690d526cc7c">

### Set up the Sanity Studio

Before you proceed, please be sure that you have an account on Sanity or create it using that link [Create a sanity project](https://www.sanity.io/docs/create-a-sanity-project)].

This starter is a statically generated site that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content.
It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more.
You can use this starter to kick-start a clean slate site or learn these technologies.

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

This will create a git-ignored `.env` file with environment variables that will be used for local development.

Alternatively, you can do the next: create a `.env` file manually and fill it with variables:

```bash
SANITY_API_PROJECT_ID="xxxxxxxx" # You can find this in your sanity account
SANITY_STUDIO_PROJECT_ID="xxxxxxxx"
NEXT_PUBLIC_SANITY_PROJECT_ID="xxxxxxxx"
SANITY_API_DATASET="production" # Here is the name of your dataset, for example, production
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_STUDIO_DATASET="production"
```

Open [http://localhost:3000/studio/](http://localhost:3000/studio/) with your browser to see the sanity studio.

<img width="1504" alt="Cursor_and_Info_1___Project_Name" src="https://github.com/julia-dizhak/uawit-website/assets/1140769/f4200fbe-5647-482a-aedb-563e6391faf9">


### Sanity Schema

The schema for queries is following
```
~/lib/sanity.queries/
  logo/
   queries.ts
   types.ts
  posts/
   queries.ts
   types.ts
```

<img width="246" alt="Navigation_tsx_—_uawit-website" src="https://github.com/julia-dizhak/uawit-website/assets/1140769/54ebc6c7-7eed-438d-a459-9b0853adfa41">


## Project Overview

Important files and folders

| File(s)                          | Description                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------- |
| `sanity.config.ts`               | Config file for Sanity Studio                                                         |
| `sanity.cli.ts`                  | Config file for Sanity CLI                                                            |
| `/pages/index.tsx`               | Landing page for `/`.                                                                 |
| `/pages/studio/[[...index]].tsx` | Where Sanity Studio is mounted                                                        |
| `/pages/api/draft.ts`            | Serverless route for triggering Draft mode                                            |
| `/sanity/schemas.ts`             | Where Sanity Studio gets its content types from                                       |
| `/sanity/env.ts`                 | Configuration for the Sanity project and dataset                                      |
| `/sanity/schemas.ts`             | Where Sanity Studio gets its content types from                                       |
| `/sanity/lib/client.ts`          | Sanity client configured based on `env.ts`                                            |
| `/sanity/lib/image.ts`           | Sanity image builder - unused in this template, but is needed to render Sanity images |
| `tailwind.config.js`             | Tailwind config. Only applies to files listed under `content`                         |

All pages are wrapped in `pages/_app.tsx`.

### How to open a pull-request

To open a new pull-request, you can do next

```bash
clone repo
add origin
open a new branch => git checkout -b
add you changes
npm run lint:fix
npm run format
git add .
git commit
git push
open a pr from github
```

### Deploy on production

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npm run build
or
npx vercel --prod
```

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## TODO

- add pre-commit hook
- setup github actions
