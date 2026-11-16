import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const source: string = join(here, "entry.png");

const outputDir: string | undefined =
  process.env.MAKEFUN_OUTPUT_DIR || undefined;
const dest: string = outputDir
  ? join(outputDir, "entry.png")
  : "/output/entry.png";

mkdirSync(dirname(dest), { recursive: true });

const sourceBytes: Buffer = readFileSync(source);
const sourceHash: string = createHash("sha256")
  .update(sourceBytes)
  .digest("hex");

copyFileSync(source, dest);

const destHash: string = createHash("sha256")
  .update(readFileSync(dest))
  .digest("hex");

if (destHash !== sourceHash) {
  console.error(
    `hash mismatch: copied ${dest} (${destHash}) does not match source ${source} (${sourceHash})`,
  );
  process.exit(1);
}

console.log(`wrote ${dest} sha256=${destHash}`);
