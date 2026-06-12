import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const clientDir = path.join(root, "dist", "client");
const prerenderDir = path.join(root, "dist", "server", "prerendered-routes");
const pagesDir = path.join(root, "pages-dist");

async function assertDirectory(dir, label) {
  try {
    const details = await stat(dir);
    if (!details.isDirectory()) {
      throw new Error(`${label} exists but is not a directory: ${dir}`);
    }
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new Error(`${label} is missing: ${dir}`);
    }

    throw error;
  }
}

async function main() {
  await assertDirectory(clientDir, "Vinext client output");
  await assertDirectory(prerenderDir, "Vinext prerender output");

  await rm(pagesDir, { force: true, recursive: true });
  await mkdir(pagesDir, { recursive: true });
  await cp(clientDir, pagesDir, { recursive: true });
  await cp(prerenderDir, pagesDir, { recursive: true });

  await stat(path.join(pagesDir, "index.html"));

  console.log(`Prepared Cloudflare Pages assets in ${path.relative(root, pagesDir)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
