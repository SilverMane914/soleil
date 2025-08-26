#!/usr/bin/env node

const axios = require("axios");

console.log("🌱 Running Soleil database seeds...");

async function runSeed() {
  try {
    // Check if Strapi is running
    const response = await axios.get("http://localhost:1337/admin");

    if (response.status === 200) {
      console.log("✅ Strapi is running, proceeding with seed...");

      // Since we can't directly call the seed function from here,
      // we'll provide instructions for manual setup
      console.log("\n📋 Manual Setup Instructions:");
      console.log("1. Open http://localhost:1337/admin in your browser");
      console.log("2. Create your first admin user with these credentials:");
      console.log(
        `   • Email: ${process.env.STRAPI_ADMIN_EMAIL || "admin@soleil.com"}`
      );
      console.log(
        `   • Password: ${process.env.STRAPI_ADMIN_PASSWORD || "SoleilAdmin123!"}`
      );
      console.log(
        "3. After logging in, go to Settings > Users & Permissions Plugin > Roles"
      );
      console.log("4. Edit the 'Public' role and enable permissions for:");
      console.log("   • api::footer.footer - find, findOne");
      console.log("   • api::header.header - find, findOne");

      console.log("\n✅ Seed instructions provided!");
    }
  } catch (error) {
    console.error("❌ Strapi is not running. Please start Strapi first:");
    console.error("   cd backend && yarn dev");
  }
}

runSeed();
