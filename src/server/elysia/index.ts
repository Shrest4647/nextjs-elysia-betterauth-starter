import { Elysia } from "elysia";
import { corsPlugin } from "./plugins/cors";
import { betterAuthPlugin } from "./plugins/better-auth";
import { openApiPlugin } from "./plugins/openapi";

export const elysiaApi = new Elysia({ prefix: "/api" })
  .use(corsPlugin)
  .use(betterAuthPlugin)
  .use(openApiPlugin)
  .get("/", () => "👋 Hello from Elysia!", {
    detail: {
      tags: ["App"],
    },
  })
  .get("/health", () => ({ status: "ok" }), {
    detail: {
      tags: ["App"],
    },
  })
  .get("/protected", ({ user }) => `Hello ${user.name}!`, {
    auth: true,
    detail: {
      tags: ["Auth"],
    },
  });

export type App = typeof elysiaApi;
