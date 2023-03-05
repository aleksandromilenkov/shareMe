import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: true,
  apiVersion: "2023-03-02",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
