import type { Core } from "@strapi/strapi";
import { runSeed } from "./seeds/admin-user";

export default async ({ strapi }: { strapi: Core.Strapi }) => {
  console.log("🚀 Starting strapi bootstrap...");

  try {
    // Run the complete seed process
    await runSeed(strapi);

    console.log("✅ Strapi bootstrap completed successfully!");
  } catch (error) {
    console.error("❌ Error during bootstrap:", error);
  }
};
