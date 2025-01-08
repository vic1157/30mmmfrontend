# Clean: A 30 Mighty Men Ministries Program

## Overview

A nextjs frontend for the Clean program. This will connect to the .NET backend previously developed.

## Tech Stack

- Nextjs
- ReactQuery / fetch / axios
- Gitlab CI for deploying to Vercel
- Azure CosmoDB
- GraphQL API
- Clerk for Authentication

Other potential tech:

- [Cloudinary](https://cloudinary.com/pricing) seems like a good CDN for video because it automatically provides the right type of streaming quality to the user.
- [uploadthing](https://uploadthing.com/)
- [bunny cdn](https://bunny.net/cdn/)

## Contributors

- Donovan Anderson
- Aaron Dantley
- William Learned
- Vic Ariyo

## Color Map

### Primary

| Figma             | Tailwind CSS             | Hexadecimal Color |
| ----------------- | ------------------------ | ----------------- |
| Titles            | titles-black             | #13171B           |
| Descriptions      | descriptions-grey        | #5D6B84           |
| Placeholders      | placeholders-grey        | #A7AFB6           |
| Contrast Color    | contrast-white           | #FFFFFF           |
| CTA + Accent      | primary-red              | #AF3634           |
| Main              | bkgnd-main-white         | #FAFCFE           |
| placeholders      | bkgnd-placeholders-white | #FFFFFF           |
| selected elements | bkgnd-selection-tint     | #5081BE (10%)     |
| diveder stroke    | divider-silver           | #E3E7ED           |

### Additional

| Figma                    | Tailwind CSS      | Hexadecimal Color |
| ------------------------ | ----------------- | ----------------- |
| Red                      | additional-red    | #FF675D           |
| green                    | additional-green  | #7BC62D           |
| yellow                   | additional-yellow | #F5BD4F           |
| green (blue-green)       | additional-blue   | #43CBB2           |
| Red (10%)                | additional-red    | #FF675D (10%)     |
| green (10%)              | additional-green  | #7BC62D (10%)     |
| yellow (10%)             | additional-yellow | #F5BD4F (10%)     |
| green (blue-green) (10%) | additional-blue   | #43CBB2 (10%)     |

## Roadmap

## Major Milestones

- [x] Project Skeleton
- [x] Developers Setup for Development
- [x] Login Page Components
- [ ] Sign In Page Components
- [x] Foundation Page Components
- [ ] Settings Page
- [ ] Community Rules Pop Up

## Common Commands and Tips

- to start site for development run: `npm run dev`

---

## Documentation

- [Excalidraw Requirements Development](https://link.excalidraw.com/readonly/oQPGBmVuToHRTeUx01Fy)
- [linktree](https://linktr.ee/30mmm)

---

## Useful References

breakpoints:

- smallest screen width to code for: _360px_
- tailwind classes:
  - xs: min-width: 360px
  - sm: min-width: 640px
  - md: min-width: 768px
  - lg: min-width: 1024px
  - xl: min-width: 1280px
  - 2xl: min-width: 1536px

---

## MongoDB Connection Template

Connection string pulled from MongoDB:

```javascript
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://cleanAdmin:<db_password>@cleancluster1.gdeah.mongodb.net/?retryWrites=true&w=majority&appName=cleancluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```

# update to run pipeline