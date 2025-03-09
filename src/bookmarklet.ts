import { ScriptInjector } from "@/utils/ScriptInjector";

const id = "bookmarklet";
const code = `
  import { BookmarkletRenderer } from "${Bun.env.DEPLOYMENT_URL}/index.js";

  const bookmarkletRenderer = new BookmarkletRenderer();

  bookmarkletRenderer.render();
`;

const scriptInjector = new ScriptInjector();

scriptInjector.inject(id, code);
