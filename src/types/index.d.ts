// See: https://stackoverflow.com/a/73342744
declare module "*.module.css";

// See: https://bun.sh/docs/runtime/env#typescript
declare module "bun" {
  interface Env {
    DEPLOYMENT_URL: string;
  }
}
