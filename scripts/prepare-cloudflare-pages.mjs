import { cp, copyFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const serverDir = path.join(root, "dist", "server");
const pagesDir = path.join(root, "dist", "client");

function requiredPath(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing expected build output: ${path.relative(root, filePath)}`);
  }
}

requiredPath(path.join(serverDir, "index.js"));
requiredPath(pagesDir);

await mkdir(pagesDir, { recursive: true });

await copyFile(
  path.join(serverDir, "index.js"),
  path.join(pagesDir, "_worker.js"),
);

const supportEntries = [
  "__vite_rsc_assets_manifest.js",
  "image-config.json",
  "vinext-externals.json",
  "vinext-server.json",
  "ssr",
];

for (const entry of supportEntries) {
  const source = path.join(serverDir, entry);
  if (existsSync(source)) {
    await cp(source, path.join(pagesDir, entry), {
      recursive: true,
      force: true,
    });
  }
}

console.log("Prepared Cloudflare Pages output in dist/client");
