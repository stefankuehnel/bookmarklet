// src/index.tsx
await Bun.build({
  entrypoints: ["./src/index.tsx"],
  minify: true,
  format: "esm",
  outdir: "./dist",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

// src/bookmarklet.ts
await Bun.build({
  entrypoints: ["./src/bookmarklet.ts"],
  format: "iife",
  outdir: "./dist",
  define: {
    "Bun.env.DEPLOYMENT_URL": Bun.env.DEPLOYMENT_URL,
  },
});
