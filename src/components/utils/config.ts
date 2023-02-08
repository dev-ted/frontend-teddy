import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// created sanity client with typescript safety

export const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        
        apiVersion: "2023-02-05",
    
        useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
        return builder.image(source);
}







