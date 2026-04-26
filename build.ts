import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/index.tsx"],
  bundle: true,
  minify: true,
  format: "esm",
  outdir: "./out/dist",
});

await esbuild.build({
  entryPoints: ["./src/bookmarklet.ts"],
  format: "iife",
  bundle: true,
  outdir: "./out/dist",
  define: {
    "process.env.DEPLOYMENT_URL": JSON.stringify(
      process.env.DEPLOYMENT_URL ?? "",
    ),
  },
});
