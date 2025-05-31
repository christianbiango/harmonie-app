<a href="https://harmonie-inky.vercel.app/opengraph-image.png">
  <img alt="Nephos App - Get some rest !" src="https://harmonie-inky.vercel.app/opengraph-image.png">
  <h1 align="center">Nephos - Get some rest !</h1>
</a>

<p align="center">
 For your well-being
</p>

<br/>

## About Nephos

Nephos is a new french startup working on ways to decrease doctors exhaustion in many french cities.

## Features

### I'm a doctor

  - Signup and login
  - See holidays places
  - Take one!
  - 

## Project Stack
- Next.js. A web framework built on top of react
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Components with [shadcn/ui](https://ui.shadcn.com/)
- Deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables assigned to Vercel project

## Hosting

We are deploying and hosting this project's frontend on Vercel. The backend is managed by Supabase.

## Clone and run locally

1. Clone the repository

   ```bash
   git clone https://github.com/christianbiango/harmonie-app.git ./
   ```

   `./` option clones the repository in your current folder. You can remove it if you want to clone the repository in a sub folder. Then, use `cd` to change into the app's directory

   ```bash
   cd your-directory
   ```

4. Rename `.env.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   VERCEL_URL=[INSERT VERCEL PROJECT URL]
   
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

6. This template comes with the default shadcn/ui style initialized.

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Questions or issues

- If any issue occurs, you can you share them [here]([https://github.com/christianbiango/Bot-Alty-Alternance/issues](https://github.com/christianbiango/harmonie-app/issues). We'll check them ASAP !

## Next.js Version

Developed with [Next.js 15]([https://www.python.org/downloads/release/python-3113/](https://nextjs.org/blog/next-15))
