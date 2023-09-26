# employee-fe

Repository for the front end of a sample employee dashboard.

See [employee-be](https://github.com/grims-dev/employee-be) for the back end.

## TODOs

- Implement API properly - retrieve all data, not just using test data - details:
    - Endpoints stored in constants file for easy reference.
    - Client-side fetch rather than server-sied, as this data could change at any point, and is not required at build time for SEO reasons, etc.
    - Custom hooks using `useSWR` (example in [my Spotify API project](https://github.com/grims-dev/spotify-stats/blob/main/hooks/useGetPlaylist.ts)).
    - This would handle the error state, loading state, and successful data return.
- Add modal interface for adding/updating employees
- Add buttons into table for updating/deleting employees
- Add rest of missing design elements
- Add component unit tests

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
