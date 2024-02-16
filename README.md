# UAWIT website

The website for non-profit Organization Ukrainian Women in Tech in Stockholm.

It is build using Next.js + Sanity Studio. The Sanity studio embedded in the project.

## Getting Started

This project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Set up the project locally

Clone the repository and install dependencies `npm install` and run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

> **Note**
>
> This starter uses the `/pages` directory for Next.js routing.
>

### Set up the Sanity Studio

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

This will create a git-ignored `.env` file with environment variables that will be used for local development.

Alternatively you can do next: create `.env` file manually and filled it with variables

```bash
SANITY_API_PROJECT_ID="xxxxxxxx" - you can find this in your sanity account
SANITY_STUDIO_PROJECT_ID="xxxxxxxx"
NEXT_PUBLIC_SANITY_PROJECT_ID="xxxxxxxx"
SANITY_API_DATASET="production" - here is the name of your dataset, for example "production"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_STUDIO_DATASET="production"
```

## Sanity Studio

This starter is a statically generated site that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content.
It comes with a native Sanity Studio that offers features like real-time collaboration, instant side-by-side content previews, and intuitive editing.

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more.
You can use this starter to kick-start a clean slate site or learn these technologies.

Open [http://localhost:3000/studio/](http://localhost:3000/studio/structure) with your browser to see the sanity studio.




## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


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


### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```

## Questions and Answers

### It doesn't work! Where can I get help?

In case of any issues or questions, you can post:

- [GitHub Discussions for Next.js][vercel-github]
- [Sanity's GitHub Discussions][sanity-github]
- [Sanity's Community Slack][sanity-community]

### How can I remove the "Next steps" block from my app?

You can remove it by deleting `intro-template`, and removing `IntroTemplate` usage from `pages/index.tsx`

## Next steps

- [Setup live preview](./docs/studio-preview.md)
- [Join our Slack community to ask questions and get help][sanity-community]
- [How to edit my content structure?][sanity-schema-types]
- [How to query content?][sanity-groq]
- [What is content modelling?][sanity-content-modelling]

[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanity-io%2Fsanity-template-nextjs-clean&repository-name=nextjs-sanity-clean&project-name=nextjs-sanity-clean&demo-title=Clean+Sanity+%2B+Next.js+app&demo-image=https%3A%2F%2Fuser-images.githubusercontent.com%2F835514%2F212771865-7a603a28-0416-45e8-84d3-2aafe02b0c7f.png&demo-description=A+clean+example+of+Next.js+with+embedded+Sanity+ready+for+recomposition.&demo-url=https%3A%2F%2Ftemplate-nextjs-clean.sanity.build&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&external-id=nextjs%3Btemplate%3Dnextjs-sanity-clean
[integration]: https://www.sanity.io/docs/vercel-integration?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[`.env.local.example`]: .env.local.example
[nextjs]: https://github.com/vercel/next.js
[sanity-create]: https://www.sanity.io/get-started/create-project?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-deployment]: https://www.sanity.io/docs/deployment?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-community]: https://slack.sanity.io/
[sanity-schema-types]: https://www.sanity.io/docs/schema-types?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-github]: https://github.com/sanity-io/sanity/discussions
[sanity-groq]: https://www.sanity.io/docs/groq?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-content-modelling]: https://www.sanity.io/docs/content-modelling?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-webhooks]: https://www.sanity.io/docs/webhooks?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[vercel-isr]: https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta
[vercel]: https://vercel.com
[vercel-github]: https://github.com/vercel/next.js/discussions
[app-dir]: https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory
