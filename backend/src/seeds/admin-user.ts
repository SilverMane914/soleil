import type { Core } from "@strapi/strapi";
import permissions from "./data/permissions.json";

export const createAdminUser = async (strapi: Core.Strapi) => {
  try {
    const adminEmail = process.env.STRAPI_ADMIN_EMAIL || "admin@soleil.com";
    const adminPassword =
      process.env.STRAPI_ADMIN_PASSWORD || "SoleilAdmin123!";

    // Check if any admin users exist
    const adminExists = await strapi.db.query("admin::user").count();

    if (adminExists === 0) {
      // Get the default admin role
      const superAdminRole = await strapi.db.query("admin::role").findOne({
        where: { code: "strapi-super-admin" },
      });

      if (superAdminRole) {
        // Try to use Strapi's admin service for proper password handling
        try {
          const adminUser = await strapi.admin.services.user.create({
            data: {
              firstname: "Soleil",
              lastname: "Admin",
              email: adminEmail,
              password: adminPassword,
              roles: [superAdminRole.id],
              isActive: true,
              blocked: false,
              preferedLanguage: "en",
            },
          });
          console.log(`✅ Default admin user created: ${adminUser.email}`);
        } catch (serviceError) {
          console.log(
            "Admin service not available, trying alternative method..."
          );

          // Fallback: Use query method but we need to hash the password manually
          // Import bcrypt dynamically to avoid issues
          const bcrypt = require("bcryptjs");
          const hashedPassword = await bcrypt.hash(adminPassword, 12);

          const adminUser = await strapi.query("admin::user").create({
            data: {
              firstname: "Soleil",
              lastname: "Admin",
              email: adminEmail,
              password: hashedPassword,
              roles: [superAdminRole.id],
              isActive: true,
              blocked: false,
              preferedLanguage: "en",
            },
          });
          console.log(
            `✅ Default admin user created (fallback): ${adminUser.email}`
          );
        }
      } else {
        console.error(
          "❌ Super Admin role not found. Cannot create default admin user."
        );
      }
    } else {
      console.log("ℹ️ Admin user already exists, skipping creation.");
    }
  } catch (error) {
    console.error("❌ Error creating admin user:", error);
  }
};

export const setupPublicPermissions = async (strapi: Core.Strapi) => {
  try {
    // Get or create the public role
    let publicRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({
        where: { type: "public" },
      });

    if (!publicRole) {
      publicRole = await strapi.query("plugin::users-permissions.role").create({
        data: {
          name: "Public",
          description: "Default role given to unauthenticated user.",
          type: "public",
          permissions: {},
        },
      });
    }

    // Use permissions from JSON file
    const publicPermissions = permissions.public;

    // Update public role permissions
    await strapi.query("plugin::users-permissions.role").update({
      where: { id: publicRole.id },
      data: {
        permissions: publicPermissions,
      },
    });

    console.log("✅ Public permissions configured successfully");
  } catch (error) {
    console.error("❌ Error setting up public permissions:", error);
  }
};

export const setupAllPermissions = async (strapi: Core.Strapi) => {
  try {
    console.log("🔧 Setting up all role permissions...");

    // Set up public role
    await setupRolePermissions(strapi, "public", permissions.public);

    // Set up authenticated role
    await setupRolePermissions(
      strapi,
      "authenticated",
      permissions.authenticated
    );

    // Set up admin role (if it exists)
    await setupRolePermissions(strapi, "admin", permissions.admin);

    console.log("✅ All role permissions configured successfully");
  } catch (error) {
    console.error("❌ Error setting up all permissions:", error);
  }
};

const setupRolePermissions = async (
  strapi: Core.Strapi,
  roleType: string,
  rolePermissions: any
) => {
  try {
    // Get or create the role
    let role = await strapi.query("plugin::users-permissions.role").findOne({
      where: { type: roleType },
    });

    if (!role) {
      const roleData = {
        name: roleType.charAt(0).toUpperCase() + roleType.slice(1),
        description: `Role for ${roleType} users.`,
        type: roleType,
        permissions: {},
      };

      role = await strapi.query("plugin::users-permissions.role").create({
        data: roleData,
      });
    }

    // Update role permissions
    await strapi.query("plugin::users-permissions.role").update({
      where: { id: role.id },
      data: {
        permissions: rolePermissions,
      },
    });

    console.log(`✅ ${roleType} role permissions configured`);
  } catch (error) {
    console.error(`❌ Error setting up ${roleType} permissions:`, error);
  }
};

// Main seed function that can be called from bootstrap
export const runSeed = async (strapi: Core.Strapi) => {
  console.log("🌱 Running Soleil database seeds...");

  try {
    // Create admin user
    await createAdminUser(strapi);

    // Set up all permissions
    await setupAllPermissions(strapi);

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error during seeding:", error);
  }
};
